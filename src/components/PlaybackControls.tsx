import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import {
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";

const PlaybackControls = () => {
  return (
    <>
      <HStack justifyContent="space-between" h="70px" bg="gray.700" padding={5}>
        <Text>Song Details</Text>
        <Box>
          <HStack spacing={5}>
            <IoPlaySkipBackSharp size="25px" />
            <IoPlayCircleSharp size="50px" />
            <IoPlaySkipForwardSharp size="25px" />
          </HStack>
        </Box>

        <Slider
          aria-label="slider-ex-1"
          defaultValue={30}
          colorScheme="green"
          w="10%"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </HStack>
    </>
  );
};

export default PlaybackControls;
