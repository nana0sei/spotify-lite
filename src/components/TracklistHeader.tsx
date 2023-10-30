import { HStack, Divider, Box, Text } from "@chakra-ui/react";
import { LuClock3 } from "react-icons/lu";

const TracklistHeader = () => {
  return (
    <>
      <HStack paddingBottom={2} justifyContent="space-between">
        <Box>
          <HStack spacing={5}>
            <Text>#</Text>
            <Text>Title</Text>
          </HStack>
        </Box>
        <LuClock3 />
      </HStack>
      <Divider />
    </>
  );
};

export default TracklistHeader;
