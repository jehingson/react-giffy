import React, { useContext } from 'react'
import Gif from '../../components/Gif'
import GifsContext from '../../context/GifsContext'
import StaticContext from '../../context/StaticContext'


export default function Detail({ params }) {

    const { gifs } = useContext(GifsContext)
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    console.log('context gifs', gif)
    console.log('params', params.id)

    return <Gif {...gif} />
}
