import { Image, Text, VStack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useNewReleases from "../hooks/useNewReleases";
import Summary from "./Summary";
import { Link } from "react-router-dom";

const NewReleases = () => {
  const { data: newReleases, isLoading, error } = useNewReleases();
  const skeletons = [1, 2, 3, 4, 5];

  if (isLoading)
    return (
      <>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5} pt={2}>
          {skeletons.map((skeleton) => (
            <Skeleton key={skeleton} h="200px" w="200px" />
          ))}
        </SimpleGrid>
      </>
    );
  if (error || !newReleases) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacing={5}>
        {newReleases.albums.items.map((album, index) => (
          <Link to={`/albums/${album.id}`} key={index}>
            <VStack pt={2} align="flex-start">
              <Image src={album.images[0].url} key={index} />
              <Text as="b">
                <Summary children={album.name} limit={20} />
              </Text>
              <Text key={index} fontSize="sm" color="gray.600">
                {album.artists.map((artist, index) =>
                  index === album.artists.length - 1
                    ? artist.name
                    : artist.name + ", "
                )}
              </Text>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewReleases;
