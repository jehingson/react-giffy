import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'


const ListGif = ({ keyword }) => {
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        console.log('keyword', keyword)
        getGifs({ keyword }).then(gifs => setGifs(gifs))
        console.log('gids', gifs)
    }, [keyword])


    return gifs.map(({ id, title, url }) =>
        <Gif
            key={id}
            id={id}
            title={title}
            url={url}
        />
    )
}

export default ListGif
