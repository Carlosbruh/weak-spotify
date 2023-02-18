import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainHeader from "./headers/MainHeader";
import React from "react";
import { useSelector } from "react-redux";
import { selectTokenId } from "./Redux/SpotifyRedux";

function App() {
  const tokenId = useSelector(selectTokenId);
  console.log(tokenId);
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader></MainHeader>
        <h1>{tokenId}</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
