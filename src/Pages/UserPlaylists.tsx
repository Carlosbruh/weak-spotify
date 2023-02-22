import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTokenId } from "../Redux/SpotifyRedux";
import { getUserPlaylists } from "../SpotifyApi";

function UserPlaylists() {
  const tokenId = useSelector(selectTokenId);
  console.log(tokenId);
  useEffect(() => {
    tokenId && getUserPlaylists(tokenId);
  }, [tokenId]);

  return <h1>{"userplaylists"}</h1>;
}

export default UserPlaylists;
