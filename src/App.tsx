import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./headers/MainHeader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToken, selectTokenId } from "./Redux/SpotifyRedux";
import { getAcessToken, getUserPlaylists } from "./SpotifyApi";
import Home from "./Pages/Home";
import UserPlaylists from "./Pages/UserPlaylists";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAcessToken().then((token) => {
      dispatch(saveToken(token));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader></MainHeader>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/userplaylists"
            element={<UserPlaylists></UserPlaylists>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
