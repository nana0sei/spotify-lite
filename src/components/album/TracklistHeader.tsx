import { HStack, Divider, Box, Text, Show } from "@chakra-ui/react";
import { LuClock3 } from "react-icons/lu";

const TracklistHeader = () => {
  return (
    <>
      <Show above="sm">
        <HStack paddingBottom={2} justifyContent="space-between">
          <Box>
            <HStack spacing={5}>
              <Text>#</Text>
              <Text>Title</Text>
            </HStack>
          </Box>
          <LuClock3 />
        </HStack>
      </Show>
      <Divider />
    </>
  );
};

export default TracklistHeader;
