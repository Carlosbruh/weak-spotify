import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTokenId } from "../../Redux/SpotifyRedux";

interface Playlist {
  image: string;
  title: string;
}

function UserPlaylist(props: Playlist) {
  const tokenId = useSelector(selectTokenId);

  useEffect(() => {}, [tokenId]);

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px", color: "green" }}>
      <img className="image-size" src={props.image} alt="Example" />
      <h3>
        <Link to="/" style={{ color: "green" }}>
          {props.title}
        </Link>
      </h3>
    </div>
  );
}

export default UserPlaylist;
