import React, { useState, useEffect, useRef } from 'react'
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

// creacion de un Hooks
function useNearScreen() {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function ({ distance = '100px' } = {}) {
        let observer
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log('ell', el.isIntersecting)
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }


        // si el navegador no cuenta con intersection observer
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
            observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    }, [])
    return { isNearScreen, fromRef }
}

// Lazy Trending
export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>
}