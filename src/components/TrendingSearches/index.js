import React, { useState, useEffect } from 'react'
import getTrendingSearchTerms from '../../services/getTrendingSearchTerms'
import Category from '../Category'


export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingSearchTerms()
            .then(setTrends)
    }, [])


    return <Category name="Tendencias" options={trends} />
}
