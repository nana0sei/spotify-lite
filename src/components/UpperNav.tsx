import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";

const UpperNav = () => {
  return (
    <>
      <Card>
        <CardBody>
          <HStack paddingY={1}>
            <RiHome5Fill size="25px" />
            <Heading fontSize="xl">Home</Heading>
          </HStack>
          <HStack paddingY={1}>
            <BiSearch size="25px" />
            <Heading fontSize="xl">Search</Heading>
          </HStack>{" "}
        </CardBody>
      </Card>
    </>
  );
};

export default UpperNav;
