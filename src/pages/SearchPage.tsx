import { SetStateAction, useState } from "react";
import SearchInput from "../components/SearchInput";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";
import SearchResults from "../components/SearchResults";
import { Box } from "@chakra-ui/react";

const SearchPage = () => {
  const apiClient = new APIClient<SearchResponse>("/search");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse>();

  const handleSearch = async () => {
    const res = await apiClient.search(query);
    console.log(res);
    setResults(res);
  };

  const handleChange = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Box paddingY={2} paddingX={5}>
        <SearchInput
          onSubmit={handleSearch}
          onChange={handleChange}
          query={query}
        />
        {results && (
          <SearchResults
            artistName={results.artists?.items[0].name}
            artistImage={results.artists?.items[0].images[0].url}
            type={results.artists?.items[0].type}
          />
        )}
      </Box>
    </>
  );
};

export default SearchPage;
