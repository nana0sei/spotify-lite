import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  query: string;
  onChange: (event: any) => void;
  onSubmit: () => void;
}

const SearchInput = ({ query, onChange, onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={query}
          onChange={onChange}
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
  );
};

export default SearchInput;
