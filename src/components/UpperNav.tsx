import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const UpperNav = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <HStack paddingBottom={1}>
            <AiFillHome />
            <Heading fontSize="md">Home</Heading>
          </HStack>
          <HStack paddingTop={1}>
            <BiSearch />
            <Heading fontSize="md">Search</Heading>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default UpperNav;
