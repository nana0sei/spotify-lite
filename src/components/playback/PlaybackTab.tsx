import {
  HStack,
  Show,
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
        <Show above="sm">
          <Slider
            aria-label="slider-ex-1"
            defaultValue={100}
            colorScheme="green"
            w="10%"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Show>
      </HStack>
    </>
  );
};

export default PlaybackTab;
