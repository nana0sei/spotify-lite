import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Heading,
  VStack,
} from "@chakra-ui/react";

interface Props {
  img?: string;
  name?: string;
  type?: string;
}

const TopResult = ({ img, name, type }: Props) => {
  return (
    <>
      <VStack spacing={2} align="flex-start" paddingY={2}>
        <Heading fontSize="2xl">Top result</Heading>
        <Card bg="gray.800" borderRadius={10} minW="350px">
          <CardBody>
            <VStack spacing={2} align="flex-start">
              <Avatar name={name} src={img ? img : ""} size="xl" />
              <Heading fontSize="3xl">{name}</Heading>

              <Badge borderRadius={5}>{type}</Badge>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
};

export default TopResult;
