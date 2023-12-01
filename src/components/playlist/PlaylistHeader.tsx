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

  if (isLoading) return <Skeleton boxSize="300px" marginY={5} marginX={10} />;
  if (error || !playlist) throw error;

  return (
    <>
      <HStack paddingY={5} paddingX={10}>
        <Image boxSize="300px" src={playlist.images[0].url} />

        <Show above="md">
          <VStack align="flex-start">
            <Text>Playlist</Text>
            <Heading size="3xl">{playlist.name}</Heading>
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
