import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveItem, selectTokenId } from "../../Redux/SpotifyRedux";

interface Playlist {
  image: string;
  title: string;
  item: SpotifyApi.PlaylistObjectSimplified;
}

function UserPlaylist(props: Playlist) {
  const dispatch = useDispatch();
  const tokenId = useSelector(selectTokenId);

  useEffect(() => {}, [tokenId]);

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px", color: "green" }}>
      <img className="image-size" src={props.image} alt="Example" />
      <h3>
        <Link
          to="/playlist"
          onClick={() => dispatch(saveItem(props.item))}
          style={{ color: "green" }}
        >
          {props.title}
        </Link>
      </h3>
    </div>
  );
}

export default UserPlaylist;
