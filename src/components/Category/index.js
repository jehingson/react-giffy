import React from 'react'
import { Link } from 'wouter'
//import './styles.js'

export default function Category({ name, options = [] }) {

    return (
        <div className="category">
            <h3 className="category-title">{name}</h3>
            <ul className="category-list">
                {options.map((popularGif) => (
                    <li key={popularGif} className="category-link">
                        <Link to={`/search/${popularGif}`}>
                            {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
