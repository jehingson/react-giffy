import React from 'react'
import { Link } from "wouter";
import './Gif.css'


export default function Gif({ title, id, url }) {
    return (
        <div className="Gif">
            <Link className="Gif-link" to={`/gif/${id}`}>
                <h4>{title}</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    )
}

