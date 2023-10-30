import { BsSearch } from "react-icons/bs";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useSearch from "../hooks/useSearch";
import { useParams } from "react-router-dom";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { q } = useParams();

  const { data: search, isLoading, error } = useSearch(q!);
  const ref = useRef<HTMLInputElement>(null);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <Box paddingY={2} paddingX={10}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) console.log(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            bg="gray.800"
            ref={ref}
            borderRadius={20}
            focusBorderColor="white"
            width="40%"
            placeholder="What do you want to listen to?"
            variant="filled"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
