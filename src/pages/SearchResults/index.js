import React from 'react'
import ListGif from 'components/ListGif'
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs'


function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const handleNextpage = () => setPage(prevPage => prevPage + 1)

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListGif gifs={gifs} />
            </>
        }
        <button onClick={handleNextpage}>Get next page</button>
    </>
}
export default React.memo(SearchResults)