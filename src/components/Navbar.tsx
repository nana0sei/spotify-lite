import { VStack } from "@chakra-ui/react";
import UpperNav from "./UpperNav";
import LowerNav from "./LowerNav";

const Navbar = () => {
  return (
    <>
      <VStack spacing={2}>
        <UpperNav />
        <LowerNav />
      </VStack>
    </>
  );
};

export default Navbar;
