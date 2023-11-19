import axios from "axios";
import getAccessToken from "./token-client";

const access_token = await getAccessToken();

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
  headers: {
    Authorization: "Bearer " + access_token,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  search = (q: string) => {
    return axiosInstance
      .get<T>(this.endpoint, {
        params: {
          q: q,
          type: "album,artist",
          limit: 10,
        },
      })
      .then((res) => res.data);
  };

  getAll = () => {
    return axiosInstance
      .get<T>("browse" + this.endpoint, {
        params: {
          country: "GH",
          limit: 10,
        },
      })
      .then((res) => res.data);
  };
}

export default APIClient;
