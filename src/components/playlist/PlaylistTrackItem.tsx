import { HStack, VStack, Show, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ExplicitTag from "../ExplicitTag";
import Summary from "../Summary";
import usePlaybackQueryStore from "../../queries/playback-store";

interface Props {
  id: string;
  name: string;
  track_number: number;
  artists: string[];
  added_at: string;
  duration: string;
  explicit: boolean;
  album: {
    link: string;
    name: string;
  };
}

const PlaylistTrackItem = ({
  id,
  name,
  track_number,
  artists,
  added_at,
  duration,
  explicit,
  album,
}: Props) => {
  const {
    playbackState: { currentTrack },
    togglePlayback,
    setCurrentTrack,
  } = usePlaybackQueryStore();
  return (
    <>
      <HStack
        justifyContent="space-between"
        fontSize="sm"
        _hover={{
          bg: "gray.500",
        }}
        borderRadius={5}
        paddingX={1}
      >
        {/* left section */}
        <Box>
          <HStack
            spacing={3}
            onClick={() => {
              currentTrack != id ? setCurrentTrack(id) : togglePlayback();
            }}
          >
            <Box boxSize="20px">
              <Text size="2xl">{track_number}</Text>
            </Box>
            <VStack align="flex-start" spacing={1} paddingY={2}>
              <HStack spacing={1}>
                <Text as="b">
                  <Summary children={name} limit={35} />
                </Text>
                <Show below="md">{explicit && <ExplicitTag />}</Show>
              </HStack>

              {/* artist names and explicit tags */}
              <HStack spacing={1}>
                <Show above="md">{explicit && <ExplicitTag />}</Show>
                {/* dynamically render artist names */}

                {artists.length < 3
                  ? artists.map((artist, index) => (
                      <Text key={index}>
                        {index === artists.length - 1 ? artist : artist + ","}
                      </Text>
                    ))
                  : artists
                      .slice(0, 3)
                      .map((artist, index) => (
                        <Text>
                          {index === 2 ? `${artist}...` : `${artist},`}
                        </Text>
                      ))}
              </HStack>
            </VStack>
          </HStack>
        </Box>

        {/* right section */}
        <Show above="sm">
          <HStack w="60%" justifyContent="space-between">
            <Box
              w="35%"
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Link to={album.link}>
                <Summary children={album.name} limit={25} />
              </Link>
            </Box>
            <Text>{added_at}</Text>
            <Text>{duration}</Text>
          </HStack>
        </Show>
      </HStack>
    </>
  );
};

export default PlaylistTrackItem;
