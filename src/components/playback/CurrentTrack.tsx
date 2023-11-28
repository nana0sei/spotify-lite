import {
  HStack,
  Text,
  Image,
  Box,
  VStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useTracks from "../../hooks/useTrack";
import usePlaybackQueryStore from "../../queries/playback-store";

const CurrentTrack = () => {
  const {
    playbackState: { currentTrack },
  } = usePlaybackQueryStore();
  const { data: track, isLoading, error } = useTracks(currentTrack!);

  if (isLoading)
    return (
      <HStack spacing={2} py={1} px={2}>
        <Skeleton boxSize="50px" />
        <SkeletonText noOfLines={2} w="100px" skeletonHeight={2} />
      </HStack>
    );

  if (error || !currentTrack)
    return (
      <HStack spacing={2} py={1} px={2}>
        <HStack boxSize="50px" bg="gray.500" />
        <Text>--- --- ---</Text>
      </HStack>
    );

  return (
    <>
      <HStack spacing={2} py={1} px={2}>
        <Image
          src={track?.album.images[0].url}
          boxSize="50px"
          borderRadius={5}
        />
        <Box>
          <VStack spacing={1} align="flex-start">
            <Text as="b">{track?.name}</Text>
            <HStack spacing={1}>
              {track?.artists.map((artist, index) => (
                <Text key={index} fontSize="sm">
                  {index === track.artists.length - 1
                    ? artist.name
                    : artist.name + ","}
                </Text>
              ))}
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </>
  );
};

export default CurrentTrack;
