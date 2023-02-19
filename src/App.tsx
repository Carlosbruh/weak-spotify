import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainHeader from "./headers/MainHeader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToken, selectTokenId } from "./Redux/SpotifyRedux";
import { getAcessToken } from "./SpotifyApi";

function App() {
  const dispatch = useDispatch();
  const tokenId = useSelector(selectTokenId);
  useEffect(() => {
    getAcessToken().then((xd) => {
      dispatch(saveToken(xd));
    });
  }, []);

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
