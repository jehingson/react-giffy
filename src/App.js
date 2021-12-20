import React, { useState } from "react";
import './App.css';
import ListGif from "./components/ListGif";
import { Route, Link } from "wouter"

function App() {
  const [keyword, setkeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/mapaches">Gifs de mapaches</Link>
        <Link to="/gif/memes">Gifs de memes</Link>
        <Link to="/gif/matrix">Gifs de matrix</Link>
        <Link to="/gif/venezuela">Gifs de venezuela</Link>

        <Route
          component={ListGif}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
