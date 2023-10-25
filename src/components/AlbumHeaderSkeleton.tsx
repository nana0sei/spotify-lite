import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const AlbumHeaderSkeleton = () => {
  return (
    <>
      <HStack padding={5}>
        <Skeleton boxSize="300px" />
        <SkeletonText boxSize="300px" noOfLines={4} spacing="5" />
      </HStack>
    </>
  );
};

export default AlbumHeaderSkeleton;
