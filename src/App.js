import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Data from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Ingrese un nombre" data={Data} />
    </div>
  );
}

export default App;
