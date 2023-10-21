import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
  params: {
    clientID: "4c6ae60992184ac7bc189106d32e1074",
    clientSecret: "abe96e51897b427099725255caff0598",
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: "grant_type=client_credentials&client_id=clientID&client_secret=clientSecret",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
