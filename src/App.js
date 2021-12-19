import React, { useState } from "react";
import './App.css';
import ListGif from "./components/ListGif";


function App() {
  const [keyword, setkeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setkeyword('matrix')}> Cambiar keyword</button>
        <ListGif keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
