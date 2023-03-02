import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTokenId } from "../../Redux/SpotifyRedux";
import { getUserPlaylists } from "../../SpotifyApi";
import UserPlaylist from "./Playlist";

function UserPlaylists() {
  const tokenId = useSelector(selectTokenId);
  const [userPlaylists, setUserPlaylists] =
    React.useState<SpotifyApi.ListOfUsersPlaylistsResponse>();

  useEffect(() => {
    tokenId && fetchData();
  }, [tokenId]);

  const fetchData = async () => {
    await getUserPlaylists().then((playlists) => {
      setUserPlaylists(playlists);
    });
  };
  console.log(userPlaylists);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "auto",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      {userPlaylists?.items.map((item, index) => (
        <div key={index}>
          <UserPlaylist
            item={item}
            image={item.images[0].url}
            title={item.name}
          />
        </div>
      ))}
    </div>
  );
}

export default UserPlaylists;
