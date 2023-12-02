import { useParams } from "react-router-dom";
import {
  HStack,
  Heading,
  Image,
  Show,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import usePlaylist from "../../hooks/usePlaylist";

const PlaylistHeader = () => {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = usePlaylist(id!);

  const removeAnchorTags = (input: string | null) => {
    if (!input) return "";

    return input.replace(/<a\b[^>]*>(.*?)<\/a>/g, "$1");
  };

  if (isLoading) return <Skeleton boxSize="300px" marginY={2} marginX={6} />;
  if (error || !playlist) throw error;

  return (
    <>
      <HStack paddingY={2} paddingX={6}>
        <VStack>
          <Image
            w={{ sm: "100%", md: "50%", lg: "250px" }}
            src={playlist.images[0].url}
          />

          {/* small screen album details */}
          <Show below="md">
            <Text as="b">{playlist.name}</Text>
            <Text fontSize="sm">
              {playlist.owner.display_name} • {playlist.followers.total} likes
            </Text>
            <Text fontSize="sm" color="gray.500">
              {removeAnchorTags(playlist.description)}
            </Text>
          </Show>
        </VStack>

        <Show above="md">
          <VStack align="flex-start">
            <Text>Playlist</Text>
            <Heading size="2xl">{playlist.name}</Heading>
            <Text pt={5} fontSize="sm" color="gray.600" as="b">
              {removeAnchorTags(playlist.description)}
            </Text>
            <HStack>
              <Text as="b">{playlist.owner.display_name} • </Text>
              <Text>
                {playlist.followers.total} likes • {playlist.tracks.total}{" "}
                {playlist.tracks.total === 1 ? "song" : "songs"}
              </Text>
            </HStack>
          </VStack>
        </Show>
      </HStack>
    </>
  );
};

export default PlaylistHeader;
