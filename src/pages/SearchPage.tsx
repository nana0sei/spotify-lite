import { SetStateAction, useState } from "react";
import SearchInput from "../components/SearchInput";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";

const SearchPage = () => {
  const apiClient = new APIClient<SearchResponse>("/search");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse>({});

  const handleSearch = async () => {
    const res = await apiClient.search(query);
    console.log(res);
    setResults(res);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SearchInput
        onSubmit={handleSearch}
        onChange={handleChange}
        query={query}
      />
    </>
  );
};

export default SearchPage;
