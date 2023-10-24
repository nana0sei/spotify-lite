import axios from "axios";
import qs from "qs";

interface Token {
  access_token: string;
}

const clientID = "4c6ae60992184ac7bc189106d32e1074";
const clientSecret = "abe96e51897b427099725255caff0598";
const token = btoa(clientID + ":" + clientSecret);
const data = qs.stringify({ grant_type: "client_credentials" });

const getAccessToken = () => {
  const tokenURL = "https://accounts.spotify.com/api/token";
  axios
    .post<Token>(tokenURL, data, {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data.access_token);
};

export default getAccessToken;
