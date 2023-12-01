import { Box, Divider, HStack, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <HStack
      justifyContent="space-evenly"
      bg="gray.800"
      h="70px"
      alignContent="center"
    >
      <Link to="/">
        <MdHomeFilled size="50px" />
      </Link>
      <Divider orientation="vertical" />
      <Link to="/search">
        <BiSearch size="50px" />
      </Link>
    </HStack>
  );
};

export default MobileNav;
