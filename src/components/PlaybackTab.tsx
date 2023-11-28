import {
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import CurrentTrack from "./CurrentTrack";
import PlaybackControls from "./PlaybackControls";

const PlaybackTab = () => {
  return (
    <>
      <HStack justifyContent="space-between" h="70px" bg="gray.700" padding={2}>
        <CurrentTrack />
        <PlaybackControls />

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

export default PlaybackTab;
