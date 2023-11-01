import { useQuery } from "@tanstack/react-query";
import Album from "../entities/Album";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Album>("/playlists");

const usePlaylist = (playlist_id: string) =>
  useQuery({
    queryKey: ["albums", playlist_id],
    queryFn: () => apiClient.getPlaylist(playlist_id),
  });

export default usePlaylist;
