import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import {
  IoPauseCircleSharp,
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import usePlaybackQueryStore from "../queries/playback-store";
import CurrentTrack from "./CurrentTrack";

const PlaybackControls = () => {
  const {
    togglePlayback,
    playbackState: { isPlaying },
  } = usePlaybackQueryStore();

  return (
    <>
      <HStack justifyContent="space-between" h="70px" bg="gray.700" padding={2}>
        <CurrentTrack />
        <Box>
          <HStack spacing={5}>
            <IoPlaySkipBackSharp size="25px" />
            <Box onClick={togglePlayback}>
              {isPlaying ? (
                <IoPauseCircleSharp size="50px" />
              ) : (
                <IoPlayCircleSharp size="50px" />
              )}
            </Box>
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
