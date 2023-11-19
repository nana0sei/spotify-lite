import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FeaturedPlaylists } from "../entities/FeaturedPlaylists";

const apiClient = new APIClient<FeaturedPlaylists>(
  "/browse/featured-playlists"
);

const useFeaturedPlaylists = () =>
  useQuery({
    queryKey: ["featured-playlists"],
    queryFn: () => apiClient.getFeaturedPlaylists(),
  });

export default useFeaturedPlaylists;
