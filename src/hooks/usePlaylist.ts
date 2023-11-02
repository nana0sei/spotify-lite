import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Playlist from "../entities/Playlist";

const apiClient = new APIClient<Playlist>("/playlists");

const usePlaylist = (playlist_id: string) =>
  useQuery({
    queryKey: ["playlists", playlist_id],
    queryFn: () => apiClient.get(playlist_id),
  });

export default usePlaylist;
