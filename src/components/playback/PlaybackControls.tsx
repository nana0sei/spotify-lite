import { Box, HStack, Show } from "@chakra-ui/react";
import {
  IoPauseCircleSharp,
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import usePlaybackQueryStore from "../../queries/playback-store";
import useTracks from "../../hooks/useTrack";
import { useHotkeys } from "react-hotkeys-hook";

const PlaybackControls = () => {
  const { togglePlayback, isPlaying, currentTrack } = usePlaybackQueryStore();
  const { data: track } = useTracks(currentTrack!);

  useHotkeys("space", () => togglePlayback(), { preventDefault: true });

  return (
    <>
      <Box>
        <HStack spacing={5}>
          <Show above="sm">
            <IoPlaySkipBackSharp size="25px" />
          </Show>
          <Box onClick={togglePlayback}>
            {currentTrack && isPlaying ? (
              <IoPauseCircleSharp size="50px" />
            ) : (
              <IoPlayCircleSharp size="50px" />
            )}
          </Box>
          <Show above="sm">
            <IoPlaySkipForwardSharp size="25px" />
          </Show>
        </HStack>
        {currentTrack === currentTrack && isPlaying && (
          <audio src={track?.preview_url} autoPlay onEnded={togglePlayback} />
        )}
      </Box>
    </>
  );
};

export default PlaybackControls;
