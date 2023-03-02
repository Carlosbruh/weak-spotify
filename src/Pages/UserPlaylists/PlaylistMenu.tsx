import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTokenId } from "../../Redux/SpotifyRedux";

interface Playlist {}

function UserPlaylist(props: Playlist) {
  const tokenId = useSelector(selectTokenId);

  useEffect(() => {}, [tokenId]);

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px", color: "green" }}>
      xd
    </div>
  );
}

export default UserPlaylist;
