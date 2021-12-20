import React, { useState } from 'react'
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ['Matrix', 'Colombia', 'Chile', 'Venezuela']

export default function Home() {
    const [keyword, setKeywords] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        //navegation router
        pushLocation(`/search/${keyword}`)
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
            </form>
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
