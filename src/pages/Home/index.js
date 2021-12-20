import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "wouter";
import ListGif from '../../components/ListGif';
import getGifs from '../../services/getGifs';

const POPULAR_GIFS = ['Matrix', 'Colombia', 'Chile', 'Venezuela']

export default function Home() {
    const [keyword, setKeywords] = useState('')
    const [path, pushLocation] = useLocation()
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: 'rick' })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    const handleSubmit = e => {
        e.preventDefault()
        //navegation router
        if (keyword.length > 3) {
            pushLocation(`/search/${keyword}`)
        }
    }

    const handleChange = e => {
        setKeywords(e.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Buscador de gifs..."
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                />
                <button>Buscar</button>
            </form>
            <h3 className="App-title">la última búsqueda</h3>
            <ListGif gifs={gifs} />
            <h3 className="App-title">los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
