import { VStack, HStack, Text, Show, Box } from "@chakra-ui/react";
import ExplicitTag from "../ExplicitTag";
import { useState } from "react";

interface Props {
  name: string;
  explicit: boolean;
  artists: string[];
  duration: string;
  num: number;
  preview: string;
}

const TrackItem = ({
  name,
  explicit,
  artists,
  duration,
  num,
  preview,
}: Props) => {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlayback = () => {
    setPlaying((current) => !current);
  };
  return (
    <>
      <HStack
        justifyContent="space-between"
        _hover={{
          bg: "gray.500",
        }}
        onClick={togglePlayback}
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
      {isPlaying && <audio src={preview} autoPlay />}
    </>
  );
};

export default TrackItem;
