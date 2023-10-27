import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { Box, HStack, Show, Spinner, Text, VStack } from "@chakra-ui/react";
import ExplicitTag from "./ExplicitTag";
import formatDuration from "../functions/formatDuration";
import TracklistHeader from "./TracklistHeader";

const TrackList = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;

  return (
    <>
      <Box paddingX={10}>
        <TracklistHeader />
        {album.tracks.items.map((tracks, index) => (
          <HStack key={index} justifyContent="space-between">
            {/* left section */}
            <Box>
              <HStack spacing={5}>
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
                    <Show above="md">
                      {tracks.artists.map((artists, index) => (
                        <Text key={index}>
                          {index === tracks.artists.length - 1
                            ? artists.name
                            : artists.name + ","}
                        </Text>
                      ))}
                    </Show>
                  </HStack>
                </VStack>
              </HStack>
            </Box>

            {/* right section */}
            <Text>{formatDuration(tracks.duration_ms)}</Text>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default TrackList;
