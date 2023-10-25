import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import {
  HStack,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

const AlbumHeader = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;
  return (
    <>
      <HStack padding={5}>
        <Image boxSize="300px" src={album.images[0].url} />
        <VStack align="flex-start">
          <Text>{album.album_type}</Text>
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
