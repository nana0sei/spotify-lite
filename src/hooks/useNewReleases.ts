import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import NewRelease from "../entities/NewRelease";

const apiClient = new APIClient<NewRelease>("/new-releases");

const useNewReleases = () =>
  useQuery({
    queryKey: ["new-releases"],
    queryFn: () => apiClient.getAll(),
  });

export default useNewReleases;
