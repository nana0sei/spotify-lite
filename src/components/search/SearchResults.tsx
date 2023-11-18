import { Center, Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import AlbumResult from "./AlbumResult";
import TopResult from "./TopResult";
import TopAlbum from "./TopAlbum";

const SearchResults = () => {
  const { q } = useParams();
  const { data, isLoading, error } = useSearch(q!);

  const topResult = data?.artists?.items[0];
  const topAlbum = data?.albums?.items[0];
  const albums = data?.albums?.items.slice(1, 9);

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={5} pt={5}>
        <TopResult
          img={topResult?.images[0].url}
          name={topResult?.name}
          type={topResult?.type}
        />
        <VStack spacing={1} align="flex-start" pt={2}>
          <Heading fontSize="2xl">Top Albums</Heading>
          <TopAlbum
            img={topAlbum?.images[0].url}
            name={topAlbum?.name}
            type={topAlbum?.album_type}
            link={`/albums/${topAlbum?.id}`}
          />

          {albums?.map((album, index) => (
            <AlbumResult
              key={index}
              img={album.images[0].url}
              url={`/albums/${album.id}`}
              name={album.name}
              artist={album.artists.map((artists, index) =>
                index === album.artists.length - 1
                  ? artists.name
                  : artists.name + ", "
              )}
            />
          ))}
        </VStack>
      </SimpleGrid>
    </>
  );
};

export default SearchResults;
