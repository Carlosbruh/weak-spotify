import axios from "axios";
import { Buffer } from "buffer";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

const clientId = "98e5e4c84e85499587a5823f4f1226c3";
const clientSecret = "db9b0614a0be46eb84efaf2d158bab5c";
const authString = `${clientId}:${clientSecret}`;
const encodedAuthString = Buffer.from(authString).toString("base64");

export const getAcessToken = async () => {
  await axios
    .post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${encodedAuthString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(async (response) => {
      const accessToken = response.data.access_token;
      await spotifyApi.setAccessToken(accessToken);
      //
    })
    .catch((error) => {
      console.log(error);
    });
};

spotifyApi
  .getUserPlaylists("USER_ID")
  .then((data) => {
    console.log("User playlists", data);
  })
  .catch((err) => {
    console.error(err);
  });
