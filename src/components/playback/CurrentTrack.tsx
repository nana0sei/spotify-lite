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
import { Link } from "react-router-dom";

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
      <HStack spacing={2} py={1} px={2} fontSize="sm">
        <Link to={`/albums/${track?.album.id}`}>
          <Image
            src={track?.album.images[0].url}
            boxSize="50px"
            borderRadius={5}
          />
        </Link>
        <Box>
          <VStack spacing={1} align="flex-start">
            {track?.name && track?.name.length < 40 ? (
              <Text as="b">{track?.name}</Text>
            ) : (
              <Text as="b">
                <div className="marquee">
                  <div>
                    <span>{track?.name} </span>
                    <span>{track?.name} </span>
                  </div>
                </div>
              </Text>
            )}
            <HStack spacing={1}>
              {track?.artists && track?.artists.length < 3
                ? track?.artists.map((artist, index) => (
                    <Text key={index} whiteSpace="nowrap">
                      {index === track?.artists.length - 1
                        ? artist.name
                        : artist.name + ","}
                    </Text>
                  ))
                : track?.artists.slice(0, 3).map((artist, index) => (
                    <Text whiteSpace="nowrap" fontSize="xs">
                      {index === 2 ? `${artist.name}...` : `${artist.name},`}
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
