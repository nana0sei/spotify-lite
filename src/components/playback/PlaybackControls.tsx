import { Box, HStack } from "@chakra-ui/react";
import {
  IoPauseCircleSharp,
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import usePlaybackQueryStore from "../../queries/playback-store";
import useTracks from "../../hooks/useTrack";

const PlaybackControls = () => {
  const {
    togglePlayback,
    playbackState: { isPlaying, currentTrack },
  } = usePlaybackQueryStore();
  const { data: track } = useTracks(currentTrack!);

  return (
    <>
      <Box>
        <HStack spacing={5}>
          <IoPlaySkipBackSharp size="25px" />
          <Box onClick={togglePlayback}>
            {currentTrack && isPlaying ? (
              <IoPauseCircleSharp size="50px" />
            ) : (
              <IoPlayCircleSharp size="50px" />
            )}
          </Box>
          <IoPlaySkipForwardSharp size="25px" />
        </HStack>
        {currentTrack === currentTrack && isPlaying && (
          <audio src={track?.preview_url} autoPlay loop />
        )}
      </Box>
    </>
  );
};

export default PlaybackControls;
