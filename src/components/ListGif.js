import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'


const ListGif = ({ params }) => {
    const { keyword } = params
    const [gifs, setGifs] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
        console.log('gids', gifs)
    }, [keyword])

    if (loading) return <i> cargando...</i>


    return <>
        {gifs.map(({ id, title, url }) =>
            <Gif
                key={id}
                id={id}
                title={title}
                url={url}
            />
        )}
    </>
}

export default ListGif
