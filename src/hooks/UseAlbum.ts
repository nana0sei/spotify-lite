import { useQuery } from "react-query";
import Album from "../entities/Album";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Album>("/albums");

const useAlbum = (id: string) =>
  useQuery({
    queryKey: ["albums", id],
    queryFn: () => apiClient.getAlbum(id),
  });

export default useAlbum;
