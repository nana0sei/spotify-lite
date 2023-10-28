import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

const LowerNav = () => {
  return (
    <>
      <Card width="340px">
        <CardBody alignItems="flex-start">
          <HStack justifyContent="space-between">
            <Heading fontSize="lg">Your Library</Heading>
            <BiPlus size="25px" />
          </HStack>

          {/* playlist card */}
          <Card bg="gray.600" marginTop={2}>
            <CardBody>
              <VStack justifyContent="space-between" align="flex-start">
                <Heading size="sm">Create your first playlist</Heading>
                <Text>It's easy, we'll help you</Text>
              </VStack>
              <Button
                borderRadius="30px"
                color="gray.800"
                bg="gray.50"
                marginTop={3}
              >
                Create playlist
              </Button>
            </CardBody>
          </Card>

          {/* podcast card */}
          <Card bg="gray.600" marginTop={2}>
            <CardBody>
              <VStack justifyContent="space-between" align="flex-start">
                <Heading size="sm">Let's find some podcasts to follow</Heading>
                <Text>We'll keep you updated on new episodes</Text>
              </VStack>
              <Button
                borderRadius="30px"
                color="gray.800"
                bg="gray.50"
                marginTop={3}
              >
                Browse podcasts
              </Button>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
};

export default LowerNav;
