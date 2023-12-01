import { Box, SkeletonText } from "@chakra-ui/react";

const PlaylistTrackSkeleton = () => {
  return (
    <>
      <Box>
        <SkeletonText
          paddingY={3}
          width="25%"
          noOfLines={2}
          spacing={3}
          skeletonHeight="3"
        />
      </Box>
    </>
  );
};

export default PlaylistTrackSkeleton;
