import axios from "axios";
import qs from "qs";

interface Token {
  access_token: string;
}

const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const token = btoa(clientID + ":" + clientSecret);
const data = qs.stringify({ grant_type: "client_credentials" });

const getAccessToken = () => {
  const tokenURL = "https://accounts.spotify.com/api/token";

  return axios
    .post<Token>(tokenURL, {
      data: data,
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data.access_token)
    .catch((error) => {
      console.error("Error getting access token:", error);
      throw error;
    });
};

export default getAccessToken;
