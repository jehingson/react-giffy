import React from "react";
import './App.css';
import { Route } from "wouter"
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App giphy</h1>
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
      </section>
    </div>
  );
}

export default App;
