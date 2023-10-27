import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import {
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";

const AlbumHeader = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Skeleton boxSize="300px" />;
  if (error || !album) throw error;
  return (
    <>
      <HStack paddingY={5} paddingX={10}>
        <Image boxSize="300px" src={album.images[0].url} />
        <VStack align="flex-start">
          <Text>
            {album.album_type === "album"
              ? "Album"
              : album.album_type === "compilation"
              ? "Compilation"
              : "Single"}
          </Text>
          <Heading size="4xl" paddingBottom={5}>
            {album.name}
          </Heading>
          <HStack>
            {album.artists.map((artists, index) => (
              <Text key={index}>{artists.name} • </Text>
            ))}
            <Text>
              {album.release_date} • {album.total_tracks} songs
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default AlbumHeader;
