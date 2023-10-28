import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <>
      <Card width="340px">
        <CardBody>
          <Link to="/">
            <HStack>
              <MdHomeFilled size="25px" />
              <Heading fontSize="lg">Home</Heading>
            </HStack>
          </Link>

          <Link to="/search">
            <HStack paddingTop={5}>
              <BiSearch size="25px" />
              <Heading fontSize="lg">Search</Heading>
            </HStack>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default UpperNav;
