import React from 'react'
import ListGif from '../../components/ListGif'
import Spinner from '../../components/Spinner'
import { useGifs } from '../../hooks/useGifs'


function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    console.log('useGifs', loading, gifs)

    return <>
        {loading
            ? <Spinner />
            : <ListGif gifs={gifs} />
        }
    </>
}
export default React.memo(SearchResults)