import { useParams } from "react-router-dom";
import useAlbum from "../hooks/useAlbum";
import {
  HStack,
  Heading,
  Image,
  Show,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";

const AlbumHeader = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Skeleton boxSize="300px" marginY={5} marginX={10} />;
  if (error || !album) throw error;

  return (
    <>
      <HStack paddingY={5} paddingX={10}>
        <Image boxSize="300px" src={album.images[0].url} />

        <Show above="md">
          <VStack align="flex-start">
            <Text>
              {album.album_type === "album"
                ? "Album"
                : album.album_type === "compilation"
                ? "Compilation"
                : "EP"}
            </Text>
            <Heading size="3xl">{album.name}</Heading>
            <HStack>
              {album.artists.map((artists, index) => (
                <Text key={index} as="b">
                  {artists.name} •{" "}
                </Text>
              ))}
              <Text>
                {album.release_date.slice(0, 4)} • {album.total_tracks} songs
              </Text>
            </HStack>
          </VStack>
        </Show>
      </HStack>
    </>
  );
};

export default AlbumHeader;
