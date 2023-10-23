import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
interface Token {
  access_token: string;
}
const clientID = "4c6ae60992184ac7bc189106d32e1074";
const clientSecret = "abe96e51897b427099725255caff0598";
const token = btoa(clientID + ":" + clientSecret);

const getToken = () => {
  const tokenURL = "https://accounts.spotify.com/api/token";
  axios
    .post<Token>(tokenURL, {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },

      data: "grant_type=client_credentials",
    })
    .then((res) => res.data.access_token);
};

const access_token = getToken();

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
