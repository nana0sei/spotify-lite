import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";
import { Card, Image, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Summary from "../Summary";

const FeaturedPlaylist = () => {
  const { data: featured, isLoading, error } = useFeaturedPlaylists();

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !featured) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5} py={2}>
        {featured.playlists.items.map((playlist, index) => (
          <Card key={index} bg="gray.800">
            <VStack p={3} align="flex-start">
              <Image src={playlist.images[0].url} key={index} />
              <Text as="b">{playlist.name}</Text>
              <Summary
                children={playlist.description}
                limit={40}
                color="gray.600"
                fontSize="sm"
              />
            </VStack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FeaturedPlaylist;
