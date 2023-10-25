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
          <Text>Album</Text>
          <Heading size="4xl" paddingBottom={5}>
            {album.name}
          </Heading>
          <Text>
            {album.release_date} • {album.total_tracks} songs
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default AlbumHeader;
