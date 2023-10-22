import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const clientID = "4c6ae60992184ac7bc189106d32e1074";
const clientSecret = "abe96e51897b427099725255caff0598";
const token = btoa(clientID + ":" + clientSecret);

const tokenInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: "grant_type=client_credentials&client_id=4c6ae60992184ac7bc189106d32e1074&client_secret=abe96e51897b427099725255caff0598",
});

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
  headers: {
    Authorization: `Basic ${token}`,
  },
  data: "grant_type=client_credentials",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getToken = (config: AxiosRequestConfig) => {
    return tokenInstance.post<T>(this.endpoint, config);
  };

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((res) => res.data);
  };
}

export default APIClient;
