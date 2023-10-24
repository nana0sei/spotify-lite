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
      <HStack>
        <Image boxSize="300px" src={album.images.url} />
        <VStack align="flex-start">
          <Text>Album</Text>
          <Heading size="4xl">{album.name}</Heading>
          <Text>
            {album.release_date} {album.total_tracks} songs
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default AlbumHeader;
