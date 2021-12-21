import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)
        // recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('keyword') || 'random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // guardamos  la keyword en el localStorage
                localStorage.setItem('keyword', keyword)
            })
    }, [keyword, setGifs])

    return { loading, gifs }
}
