import React, { useState, useEffect } from 'react'
import getTrendingSearchTerms from '../../services/getTrendingSearchTerms'
import Category from '../Category'


function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingSearchTerms()
            .then(setTrends)
    }, [])


    return <Category name="Tendencias" options={trends} />
}

// Lazy Trending

export default function LazyTrending() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onChange = (entries) => {
            const el = entries[0]
            console.log('ell', el)
            if (el.isIntersecting) {
                setShow(true)
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('LazyTrending'))
    }, [])

    return <div id="LazyTrending">
        {show ? <TrendingSearches /> : null}
    </div>

}