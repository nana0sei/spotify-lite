import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";

const apiClient = new APIClient<SearchResponse>("/search");

const useSearch = (name: string) =>
  useQuery({
    queryKey: ["search", name],
    queryFn: () => apiClient.search(name),
  });

export default useSearch;
