import { Avatar, HStack, Text } from "@chakra-ui/react";

interface Props {
  img: string;
  name: string;
}
const ArtistResult = ({ img, name }: Props) => {
  return (
    <>
      <HStack
        spacing={2}
        py={1}
        px={2}
        borderRadius={5}
        _hover={{
          bg: "gray.500",
        }}
        minW="350px"
      >
        <Avatar src={img} size="md" />
        <Text as="b">{name}</Text>
      </HStack>
    </>
  );
};

export default ArtistResult;
