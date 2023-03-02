import React from "react";
// @ts-ignore
import spotifylogo from "../Images/spotify-logo.png";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <img style={{ height: "200px", marginTop: "200px" }} src={spotifylogo} />
    </div>
  );
}

export default Home;
