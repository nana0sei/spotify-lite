import axios from "axios";
import getAccessToken from "./token-client";

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (id: string) => {
    const access_token = await getAccessToken();
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
      .then((res) => res.data);
  };

  search = async (q: string) => {
    const access_token = await getAccessToken();

    return axiosInstance
      .get<T>(this.endpoint, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
        params: {
          q: q,
          type: "album,artist",
          limit: 10,
        },
      })
      .then((res) => res.data);
  };

  getAll = async () => {
    const access_token = await getAccessToken();

    return axiosInstance
      .get<T>("browse" + this.endpoint, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
        params: {
          country: "GH",
          limit: 10,
        },
      })
      .then((res) => res.data);
  };
}

export default APIClient;
