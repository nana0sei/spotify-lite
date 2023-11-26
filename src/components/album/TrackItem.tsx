import { VStack, HStack, Text, Show, Box } from "@chakra-ui/react";
import ExplicitTag from "../ExplicitTag";
import usePlaybackQueryStore from "../../queries/playback-store";

interface Props {
  id: string;
  name: string;
  explicit: boolean;
  artists: string[];
  duration: string;
  num: number;
  preview: string;
}

const TrackItem = ({
  id,
  name,
  explicit,
  artists,
  duration,
  num,
  preview,
}: Props) => {
  const {
    playbackState: { isPlaying, currentTrack },
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
          setCurrentTrack(id);
          currentTrack === id && togglePlayback();
        }}
        borderRadius={5}
        paddingX={1}
      >
        {/* left section */}

        <Box>
          <HStack spacing={2}>
            <Box boxSize="20px">
              <Text size="2xl">{num}</Text>
            </Box>
            <VStack align="flex-start" spacing={1} paddingY={2}>
              <Text as="b">{name}</Text>
              {/* artist names and explicit tags */}
              <HStack spacing={1}>
                {explicit && <ExplicitTag />}
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

        <Text>{duration}</Text>
      </HStack>
      {currentTrack === id && isPlaying && <audio src={preview} autoPlay />}
    </>
  );
};

export default TrackItem;
