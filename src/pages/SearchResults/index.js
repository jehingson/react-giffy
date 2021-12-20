import React, { useState } from 'react'
import ListGif from '../../components/ListGif'
//import Spinner from 'components/spinner'


export default function SearchResults({ params }) {
    const { keyword } = params
    console.log('keyword: ' + keyword)
    return (
        <>
            <div className="App-wrapper">
                <h3 className="App-title">
                    {keyword}
                </h3>
                <ListGif keyword={keyword} />
            </div>
        </>
    )
}
