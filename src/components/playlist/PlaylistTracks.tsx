import { Link, useParams } from "react-router-dom";
import { Box, HStack, Show, Text, VStack } from "@chakra-ui/react";
import ExplicitTag from "../ExplicitTag";
import usePlaylist from "../../hooks/usePlaylist";
import PlaylistTracksHeader from "./PlaylistTracksHeader";
import TracklistSkeleton from "../album/TracklistSkeleton";
import Summary from "../Summary";
import useFormatQueryStore from "../../queries/format-store";

const PlaylistTracks = () => {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = usePlaylist(id!);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { formatDuration } = useFormatQueryStore();

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
          <HStack key={index} justifyContent="space-between" fontSize="sm">
            {/* left section */}
            <Box>
              <HStack spacing={3}>
                <Box boxSize="20px">
                  <Text key={index} size="2xl">
                    {index + 1}
                  </Text>
                </Box>
                <VStack align="flex-start" spacing={1} paddingY={2}>
                  <Text as="b">
                    <Summary children={t.track.name} limit={35} />
                  </Text>

                  {/* artist names and explicit tags */}
                  <HStack spacing={1}>
                    {t.track.explicit && <ExplicitTag key={index} />}
                    {/* dynamically render artist names */}
                    <Show above="md">
                      {t.track.artists.length < 3
                        ? t.track.artists.map((artist, index) => (
                            <Text key={index}>
                              {index === t.track.artists.length - 1
                                ? artist.name
                                : artist.name + ","}
                            </Text>
                          ))
                        : t.track.artists
                            .slice(0, 3)
                            .map((artist, index) => (
                              <Text>
                                {index === 2
                                  ? `${artist.name}...`
                                  : `${artist.name},`}
                              </Text>
                            ))}
                    </Show>
                  </HStack>
                </VStack>
              </HStack>
            </Box>

            {/* right section */}
            <Show above="sm">
              <HStack w="60%" justifyContent="space-between">
                <Box
                  key={index}
                  w="35%"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to={`/albums/${t.track.album.id}`} key={index}>
                    <Summary children={t.track.album.name} limit={25} />
                  </Link>
                </Box>
                <Text>{t.added_at.slice(0, 10)}</Text>
                <Text>{formatDuration(t.track.duration_ms)}</Text>
              </HStack>
            </Show>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default PlaylistTracks;
