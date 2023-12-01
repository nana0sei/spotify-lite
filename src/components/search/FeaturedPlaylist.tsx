import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";
import { Card, Image, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Summary from "../Summary";
import { Link } from "react-router-dom";
import AlbumCardSkeleton from "../AlbumCardSkeleton";

const FeaturedPlaylist = () => {
  const { data: featured, isLoading, error } = useFeaturedPlaylists();
  const skeletons = [1, 2, 3, 4, 5];

  if (isLoading)
    return (
      <>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5} py={2}>
          {skeletons.map((skeleton) => (
            <AlbumCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      </>
    );
  if (error || !featured) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5} py={2}>
        {featured.playlists.items.map((playlist, index) => (
          <Link to={`/playlists/${playlist.id}`}>
            <Card key={index} bg="gray.800" _hover={{ bg: "gray.500" }}>
              <VStack p={3} align="flex-start">
                <Image src={playlist.images[0].url} key={index} />
                <Text as="b">
                  <Summary limit={16}>{playlist.name}</Summary>
                </Text>

                <Summary
                  children={playlist.description}
                  limit={40}
                  color="gray.600"
                  fontSize="sm"
                />
              </VStack>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FeaturedPlaylist;
