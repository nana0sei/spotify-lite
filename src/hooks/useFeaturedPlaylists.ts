import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FeaturedPlaylists } from "../entities/FeaturedPlaylists";

const apiClient = new APIClient<FeaturedPlaylists>("/featured-playlists");

const useFeaturedPlaylists = () =>
  useQuery({
    queryKey: ["featured-playlists"],
    queryFn: () => apiClient.getAll(),
  });

export default useFeaturedPlaylists;
