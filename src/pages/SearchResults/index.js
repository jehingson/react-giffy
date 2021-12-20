import React, { useState, useEffect } from 'react'
import ListGif from '../../components/ListGif'
import getGifs from '../../services/getGifs'
import Spinner from '../../components/Spinner'


export default function SearchResults({ params }) {
    const { keyword } = params
    const [Loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return (
        <>
            {Loading
                ? <Spinner />
                : <ListGif gifs={gifs} />
            }
        </>
    )
}
