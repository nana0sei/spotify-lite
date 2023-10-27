import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const UpperNav = () => {
  return (
    <>
      <Card width="340px">
        <CardBody>
          <HStack>
            <AiFillHome size="20px" />
            <Heading fontSize="lg">Home</Heading>
          </HStack>

          <HStack paddingTop={5}>
            <BiSearch size="20px" />
            <Heading fontSize="lg">Search</Heading>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default UpperNav;
