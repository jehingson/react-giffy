import React, { useState, useEffect } from "react";
import './App.css';


const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=3bFHlFy2ctScUWnf5WEZBFAwJefL1d0P&q=matrix&limit=25&offset=0&rating=g&lang=es'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(async function () {
    console.log('actualizado los gifs')
    const res = await fetch(apiURL)
    const { data } = await res.json()
    const gifs = data.map(image => image.images.downsized_medium.url)
    setGifs(gifs)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif, index) => <img key={index} src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
