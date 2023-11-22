import { HStack, Divider, Box, Text, Show } from "@chakra-ui/react";
import { LuClock3 } from "react-icons/lu";

const PlaylistTracksHeader = () => {
  return (
    <>
      <HStack paddingBottom={2} justifyContent="space-between">
        <Box>
          <HStack spacing={5}>
            <Text>#</Text>
            <Text>Title</Text>
          </HStack>
        </Box>
        <Show above="sm">
          <Text>Album</Text>
          <Text>Date Added</Text>
        </Show>
        <LuClock3 />
      </HStack>
      <Divider />
    </>
  );
};

export default PlaylistTracksHeader;
