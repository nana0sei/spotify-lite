import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { Box, HStack, Show, Text, VStack } from "@chakra-ui/react";
import ExplicitTag from "./ExplicitTag";
import formatDuration from "../functions/formatDuration";
import TracklistHeader from "./TracklistHeader";
import TracklistSkeleton from "./TracklistSkeleton";

const TrackList = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isLoading)
    return (
      <Box paddingX={10}>
        <TracklistHeader />
        {skeletons.map((skeleton) => (
          <TracklistSkeleton key={skeleton} />
        ))}
      </Box>
    );
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
                <Box boxSize="20px">
                  <Text key={index} size="2xl">
                    {tracks.track_number}
                  </Text>
                </Box>
                <VStack align="flex-start" spacing={1} paddingY={2}>
                  <Text as="b" key={index}>
                    {tracks.name}
                  </Text>

                  {/* artist names and explicit tags */}
                  <HStack spacing={1}>
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
