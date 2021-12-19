import React, { useState, useEffect } from "react";

import './App.css';

const GIFS = ['https://media1.giphy.com/media/sULKEgDMX8LcI/giphy.gif?cid=1d93825a5dpld1u5ts4pvbrgbcdp99dbtnkn8vn117w2revz&rid=giphy.gif&ct=g', 'https://media0.giphy.com/media/eePSFNBFv2W9owZ4Sh/giphy.webp?cid=ecf05e477d9qvka3wzxca5lh4c8drr091sl3e5s7ewb4jlt4&rid=giphy.webp&ct=g']

const DIFERENT_GIFS = ['https://media4.giphy.com/media/HXigA2Cvi4pZS/200w.webp?cid=ecf05e47t8at6tjp93yl7r4qcgb2m85r5pg6d4y0xmj03009&rid=200w.webp&ct=g', 'https://media4.giphy.com/media/2IQZZnJB9KHhJ9W7o1/100.webp?cid=ecf05e47t8at6tjp93yl7r4qcgb2m85r5pg6d4y0xmj03009&rid=100.webp&ct=g']

function App() {

  const [gifs, setGifs] = useState(GIFS)


  useEffect(function () {
    setGifs(DIFERENT_GIFS)
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
