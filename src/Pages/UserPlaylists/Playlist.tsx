import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTokenId } from "../../Redux/SpotifyRedux";

interface Playlist {
  image?: string;
}

function UserPlaylist(props: Playlist) {
  const tokenId = useSelector(selectTokenId);

  useEffect(() => {}, [tokenId]);

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <img className="image-size" src={props.image} alt="Example" />
    </div>
  );
}

export default UserPlaylist;
