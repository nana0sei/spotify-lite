import { VStack, HStack, Text, Show, Box } from "@chakra-ui/react";
import ExplicitTag from "../ExplicitTag";

interface Props {
  name: string;
  explicit: boolean;
  artists: string[];
  duration: string;
  num: number;
}

const TrackItem = ({ name, explicit, artists, duration, num }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between">
        {/* left section */}

        <Box>
          <HStack spacing={3}>
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
    </>
  );
};

export default TrackItem;
