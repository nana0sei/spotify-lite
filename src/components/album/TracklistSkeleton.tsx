import { Box, SkeletonText } from "@chakra-ui/react";

const TracklistSkeleton = () => {
  return (
    <>
      <Box>
        <SkeletonText
          paddingY={3}
          width="40%"
          noOfLines={2}
          spacing={3}
          skeletonHeight="3"
        />
      </Box>
    </>
  );
};

export default TracklistSkeleton;
