import {
  Avatar,
  Badge,
  Card,
  CardBody,
  Heading,
  VStack,
} from "@chakra-ui/react";

interface Props {
  artistName?: string;
  artistImage?: string;
  type?: string;
}

const SearchResults = ({ artistName, artistImage, type }: Props) => {
  return (
    <>
      <VStack spacing={2} align="flex-start" paddingY={5}>
        <Heading fontSize="2xl">Top result</Heading>

        <Card bg="gray.800" borderRadius={10}>
          <CardBody>
            <VStack spacing={2} align="flex-start">
              <Avatar name={artistName} src={artistImage} size="2xl" />
              <Heading fontSize="3xl">{artistName}</Heading>

              <Badge borderRadius={5}>{type}</Badge>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
};

export default SearchResults;
