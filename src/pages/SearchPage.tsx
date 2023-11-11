import { SetStateAction, useState } from "react";
import SearchInput from "../components/SearchInput";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";

const SearchPage = () => {
  const apiClient = new APIClient<SearchResponse>("/search");
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await apiClient.search(query);
    console.log(results);
    return results;
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SearchInput
        onSubmit={handleSearch}
        onChange={handleInputChange}
        query={query}
      />
    </>
  );
};

export default SearchPage;
