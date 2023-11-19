import { useParams } from "react-router-dom";
import { Box, HStack, Show, Text, VStack } from "@chakra-ui/react";
import ExplicitTag from "../ExplicitTag";
import usePlaylist from "../../hooks/usePlaylist";
import PlaylistTracksHeader from "./PlaylistTracksHeader";
import TracklistSkeleton from "../album/TracklistSkeleton";

const PlaylistTracks = () => {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = usePlaylist(id!);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isLoading)
    return (
      <Box paddingX={10}>
        <PlaylistTracksHeader />
        {skeletons.map((skeleton) => (
          <TracklistSkeleton key={skeleton} />
        ))}
      </Box>
    );
  if (error || !playlist) throw error;

  return (
    <>
      <Box paddingX={10}>
        <PlaylistTracksHeader />
        {playlist.tracks.items.map((t, index) => (
          <HStack key={index} justifyContent="space-between">
            {/* left section */}
            <Box>
              <HStack spacing={5}>
                <Box boxSize="20px">
                  <Text key={index} size="2xl">
                    {t.track.items.map((track) => track.track_number)}
                  </Text>
                </Box>
                <VStack align="flex-start" spacing={1} paddingY={2}>
                  <Text as="b" key={index}>
                    {t.track.items.map((track) => track.name)}
                  </Text>

                  {/* artist names and explicit tags */}
                  <HStack spacing={1}>
                    {t.track.items.map((track) => track.explicit) && (
                      <ExplicitTag key={index} />
                    )}
                    {/* dynamically render artist names */}
                    <Show above="md">
                      {t.track.items.map((artists, index) => (
                        <Text key={index}>
                          {index === t.track.items.length - 1
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
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default PlaylistTracks;
