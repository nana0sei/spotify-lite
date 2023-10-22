import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const clientID = "4c6ae60992184ac7bc189106d32e1074";
const clientSecret = "abe96e51897b427099725255caff0598";
const token = btoa(clientID + ":" + clientSecret);

const getAuth = async () => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = "https://accounts.spotify.com/api/token";

    const response = await axios.post(token_url, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    });
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};

const access_token = await getAuth();

const axiosInstance = axios.create({
  baseURL: " https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
  data: "grant_type=client_credentials",
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
