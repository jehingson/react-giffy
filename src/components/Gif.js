import React from 'react'

function Gif({ title, id, url }) {
    return (
        <div key={id}>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </div>
    )
}

export default Gif
