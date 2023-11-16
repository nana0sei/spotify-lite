import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  img: string;
  name: string;
  artist: string[];
}
const AlbumResult = ({ img, name, artist }: Props) => {
  return (
    <>
      <HStack spacing={2} py={1}>
        <Image src={img} boxSize="50px" />
        <Box>
          <VStack spacing={1} align="flex-start">
            <Text as="b">{name}</Text>
            <Text>{artist}</Text>
          </VStack>
        </Box>
      </HStack>
    </>
  );
};

export default AlbumResult;
