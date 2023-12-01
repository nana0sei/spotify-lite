import { SetStateAction, useState } from "react";
import SearchInput from "../components/search/SearchInput";
import { Box, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavButtons from "../components/navbar/NavButtons";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Box paddingY={2} paddingX={5}>
        <HStack>
          <NavButtons />
          <SearchInput onChange={handleChange} query={query} />
        </HStack>
        <Outlet />
      </Box>
    </>
  );
};

export default SearchPage;
