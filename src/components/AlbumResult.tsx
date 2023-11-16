import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  artist: string[];
  url: string;
}
const AlbumResult = ({ img, name, artist, url }: Props) => {
  return (
    <>
      <Link to={url}>
        <HStack spacing={2} py={1}>
          <Image src={img} boxSize="50px" />
          <Box>
            <VStack spacing={1} align="flex-start">
              <Text as="b">{name}</Text>
              <Text>{artist}</Text>
            </VStack>
          </Box>
        </HStack>
      </Link>
    </>
  );
};

export default AlbumResult;
