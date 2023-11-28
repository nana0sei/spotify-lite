import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { SimplifiedTrackObject } from "../entities/Tracks";

const apiClient = new APIClient<SimplifiedTrackObject>("/tracks");

const useTracks = (id: string) =>
  useQuery({
    queryKey: ["tracks", id],
    queryFn: () => apiClient.get(id),
  });

export default useTracks;
