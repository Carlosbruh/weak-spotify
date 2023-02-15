import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainHeader from "./headers/MainHeader";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
console.log(spotifyApi);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader></MainHeader>
        xd
      </div>
    </BrowserRouter>
  );
}

export default App;
