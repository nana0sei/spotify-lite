import { useParams } from "react-router-dom";
import useAlbum from "../../hooks/useAlbum";
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

  const setProjectType = (p: string) => {
    let projectType = "";
    p === "album"
      ? (projectType = "Album")
      : p === "compilation"
      ? (projectType = "Compilation")
      : p === "single" && album.total_tracks === 1
      ? (projectType = "Single")
      : (projectType = "EP");

    return projectType;
  };

  return (
    <>
      <HStack paddingY={5} paddingX={10}>
        <Image boxSize="300px" src={album.images[0].url} />

        <Show above="md">
          <VStack align="flex-start">
            <Text>{setProjectType(album.album_type)}</Text>
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
