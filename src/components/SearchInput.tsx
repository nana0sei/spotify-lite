import { BsSearch } from "react-icons/bs";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import APIClient from "../services/api-client";
import SearchResponse from "../entities/SearchResponse";

const SearchInput = () => {
  const apiClient = new APIClient<SearchResponse>("/search");
  const [query, setQuery] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    const results = await apiClient.search(query);
    console.log(results);
    return results;
  };

  return (
    <Box paddingY={2} paddingX={10}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            value={query}
            onChange={() => {
              if (ref.current) setQuery(ref.current.value);
            }}
            bg="gray.800"
            ref={ref}
            borderRadius={20}
            focusBorderColor="white"
            width="40%"
            placeholder="What do you want to listen to?"
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
