import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import ExplicitTag from "./ExplicitTag";

const TrackList = () => {
  const formatDuration = (milliseconds: number) => {
    // Calculate minutes and seconds
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format the result as "min:sec"
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedTime;
  };
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;

  return (
    <>
      {album.tracks.items.map((tracks, index) => (
        <HStack spacing={5} key={index} paddingX={10}>
          <Text key={index} size="2xl">
            {tracks.track_number}
          </Text>

          <VStack align="flex-start" spacing={1} paddingY={2}>
            <Text as="b" key={index}>
              {tracks.name}
            </Text>

            {/* artist names and explicit tags */}
            <HStack>
              {tracks.explicit && <ExplicitTag key={index} />}

              {/* dynamically render artist names */}
              {tracks.artists.map((artists, index) => (
                <Text key={index}>
                  {index === tracks.artists.length - 1
                    ? artists.name
                    : artists.name + ","}
                </Text>
              ))}
            </HStack>
          </VStack>
          <Text>{formatDuration(tracks.duration_ms)}</Text>
        </HStack>
      ))}
    </>
  );
};

export default TrackList;
