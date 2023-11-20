import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Playlist from "../entities/Playlist";

const apiClient = new APIClient<Playlist>("/playlists");

const usePlaylist = (id: string) =>
  useQuery({
    queryKey: ["playlists", id],
    queryFn: () => apiClient.get(id),
  });

export default usePlaylist;
