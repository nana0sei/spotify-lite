import { HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import homeAlbumData from "../../data/homeAlbumData";
import { Link } from "react-router-dom";

const HomeAlbums = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={2}>
        {homeAlbumData.data.map((album, index) => (
          <Link to={`/albums/${album.id}`} key={index}>
            <HStack
              spacing={2}
              borderRadius={5}
              key={index}
              bg="gray.800"
              overflow="hidden"
              _hover={{
                bg: "gray.500",
              }}
            >
              <Image src={album.img} key={index} boxSize="50px" />
              <Text as="b">{album.name}</Text>
            </HStack>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default HomeAlbums;
