import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { HStack, Spinner, Text, VStack } from "@chakra-ui/react";

const TrackList = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;
  return (
    <>
      {album.tracks.items.map((tracks, index) => (
        <HStack spacing={5}>
          <Text key={index} size="2xl">
            {tracks.track_number}
          </Text>
          <VStack align="flex-start" spacing={1}>
            <Text as="b" key={index}>
              {tracks.name}
            </Text>
            {album.artists.map((artists, index) => (
              <Text key={index}>{artists.name} </Text>
            ))}
          </VStack>
        </HStack>
      ))}
    </>
  );
};

export default TrackList;
