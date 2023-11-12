import { Avatar, Card, CardBody, Heading } from "@chakra-ui/react";

interface Props {
  artistName?: string;
  artistImage?: string;
}

const SearchResults = ({ artistName, artistImage }: Props) => {
  return (
    <>
      <Card>
        <CardBody alignContent="flex-start">
          <Avatar name={artistName} src={artistImage} size="2xl" />
          <Heading>{artistName}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchResults;
