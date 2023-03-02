import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./headers/MainHeader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToken, selectTokenId } from "./Redux/SpotifyRedux";
import { getAcessToken, getUserPlaylists } from "./SpotifyApi";
import Home from "./Pages/Home";
import UserPlaylists from "./Pages/UserPlaylists/UserPlaylists";
import PlaylistMenu from "./Pages/UserPlaylists/PlaylistMenu";

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
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/userplaylists"
              element={<UserPlaylists></UserPlaylists>}
            ></Route>
            <Route
              path="/playlist"
              element={<PlaylistMenu></PlaylistMenu>}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
