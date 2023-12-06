import { VStack, HStack, Text, Show, Box } from "@chakra-ui/react";
import ExplicitTag from "./ExplicitTag";
import usePlaybackQueryStore from "../queries/playback-store";

interface Props {
  id: string;
  name: string;
  explicit: boolean;
  artists: string[];
  duration: string;
  num: number;
}

const TrackItem = ({ id, name, explicit, artists, duration, num }: Props) => {
  const {
    playbackState: { currentTrack },
    togglePlayback,
    setCurrentTrack,
  } = usePlaybackQueryStore();
  return (
    <>
      <HStack
        justifyContent="space-between"
        _hover={{
          bg: "gray.500",
        }}
        onClick={() => {
          currentTrack != id ? setCurrentTrack(id) : togglePlayback();
        }}
        borderRadius={5}
        paddingX={1}
        fontSize="sm"
      >
        {/* left section */}

        <Box>
          <HStack spacing={2}>
            <Box boxSize="20px">
              <Text size="2xl">{num}</Text>
            </Box>
            <VStack align="flex-start" spacing={1} paddingY={2}>
              <HStack spacing={1}>
                <Text as="b">{name}</Text>
                <Show below="md">{explicit && <ExplicitTag />}</Show>
              </HStack>
              {/* artist names and explicit tags */}
              <HStack spacing={1}>
                <Show above="md">{explicit && <ExplicitTag />}</Show>
                {/* dynamically render artist names */}
                <Show above="md">
                  {artists.map((artist, index) => (
                    <Text key={index}>
                      {index === artists.length - 1 ? artist : artist + ","}
                    </Text>
                  ))}
                </Show>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Show above="sm">
          <Text>{duration}</Text>
        </Show>
      </HStack>
    </>
  );
};

export default TrackItem;
