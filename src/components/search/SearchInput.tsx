import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  query: string;
  onChange: (event: any) => void;
}

const SearchInput = ({ query, onChange }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate(`${query}`);
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
          minW="40%"
          placeholder="What do you want to listen to?"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
