import { HStack, Divider, Box, Text, Show } from "@chakra-ui/react";
import { LuClock3 } from "react-icons/lu";

const PlaylistTracksHeader = () => {
  return (
    <>
      <HStack
        paddingBottom={2}
        justifyContent="space-between"
        fontSize="sm"
        px={1}
      >
        <Box>
          <HStack spacing={5}>
            <Text>#</Text>
            <Text>Title</Text>
          </HStack>
        </Box>

        <HStack w="60%" justifyContent="space-between">
          <Show above="sm">
            <Text w="30%">Album</Text>
            <Text>Date Added</Text>
          </Show>
          <LuClock3 />
        </HStack>
      </HStack>
      <Divider />
    </>
  );
};

export default PlaylistTracksHeader;
