import { Box, SkeletonText } from "@chakra-ui/react";

const TracklistSkeleton = () => {
  return (
    <>
      <Box>
        <SkeletonText
          paddingY={3}
          width="30%"
          noOfLines={2}
          spacing={5}
          skeletonHeight="5"
        />
      </Box>
    </>
  );
};

export default TracklistSkeleton;
