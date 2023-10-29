import { BsSearch } from "react-icons/bs";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
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
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
