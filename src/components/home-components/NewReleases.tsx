import { Card, Image, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import useNewReleases from "../../hooks/useNewReleases";
import Summary from "../Summary";
import { Link } from "react-router-dom";

const NewReleases = () => {
  const { data: newReleases, isLoading, error } = useNewReleases();

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !newReleases) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5} py={2}>
        {newReleases.albums.items.map((album, index) => (
          <Link to={`/albums/${album.id}`}>
            <Card key={index} bg="gray.800" _hover={{ bg: "gray.500" }}>
              <VStack p={3} align="flex-start">
                <Image src={album.images[0].url} key={index} />
                <Text as="b">
                  <Summary children={album.name} limit={13} />
                </Text>
                <Text key={index} fontSize="sm" color="gray.600">
                  {album.artists.map((artist, index) =>
                    index === album.artists.length - 1
                      ? artist.name
                      : artist.name + ", "
                  )}
                </Text>
              </VStack>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewReleases;
