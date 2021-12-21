import React from "react";
import './App.css';
import { Route } from "wouter"
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext";

function App() {

  

  return (
    <StaticContext.Provider value={{
      name: 'jsonDev-con-provider',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content">
          <h1>App giphy</h1>
          <GifsContextProvider>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
