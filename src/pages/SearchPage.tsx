import { SetStateAction, useState } from "react";
import SearchInput from "../components/SearchInput";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleChange = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Box paddingY={2} paddingX={5}>
        <SearchInput onChange={handleChange} query={query} />
        <Outlet />
      </Box>
    </>
  );
};

export default SearchPage;
