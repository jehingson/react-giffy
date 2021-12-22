import React, { useState, useEffect } from 'react'
import { useLocation } from "wouter";
import ListGif from '../../components/ListGif';
import { useGifs } from '../../hooks/useGifs';
import TrendingSearches from '../../components/TrendingSearches';

export default function Home() {
    const [keyword, setKeywords] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

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
                <button>Buscar</button>
                <input
                    placeholder="Buscador de gifs..."
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                />
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">la última búsqueda</h3>
                    <ListGif gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}
