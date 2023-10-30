import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";

const apiClient = new APIClient<SearchResponse>("/search");

const useSearch = (q: string) =>
  useQuery({
    queryKey: ["search", q],
    queryFn: () => apiClient.search(q),
  });

export default useSearch;
