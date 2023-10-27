import { VStack } from "@chakra-ui/react";
import UpperNav from "./UpperNav";

const Navbar = () => {
  return (
    <>
      <VStack pos="fixed">
        <UpperNav />
      </VStack>
    </>
  );
};

export default Navbar;
