import axios, { AxiosRequestConfig } from "axios";
import getAccessToken from "./token-client";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const access_token = getAccessToken();

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

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getAlbum = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
