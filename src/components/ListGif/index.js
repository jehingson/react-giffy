import React from 'react'
import Gif from '../Gif'
import './styles.css'


const ListGif = ({ gifs }) => {
    return <div className="listGifs">
        {gifs.map(({ id, title, url }) =>
            <Gif
                key={id}
                id={id}
                title={title}
                url={url}
            />
        )}
    </div>
}

export default ListGif
