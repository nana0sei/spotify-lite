import { Card, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const AlbumCardSkeleton = () => {
  return (
    <>
      <Card bg="gray.800">
        <VStack p={3}>
          <Skeleton boxSize="150px" />
          <SkeletonText
            paddingY={3}
            width="100%"
            noOfLines={2}
            skeletonHeight="3"
          />{" "}
        </VStack>
      </Card>
    </>
  );
};

export default AlbumCardSkeleton;
