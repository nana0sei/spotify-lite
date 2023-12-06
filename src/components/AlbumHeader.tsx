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
import Album from "../entities/Album";
import useFormatQueryStore from "../queries/format-store";
import useAlbum from "../hooks/useAlbum";

const AlbumHeader = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);
  const { formatAlbumLength, setProjectType } = useFormatQueryStore();

  if (isLoading) return <Skeleton boxSize="250px" marginY={2} marginX={6} />;
  if (error || !album) throw error;

  const releaseDate = album.release_date.slice(0, 4);

  const getDuration = (album: Album) => {
    let totalDuration = 0;
    album.tracks.items.forEach((track) => (totalDuration += track.duration_ms));
    return totalDuration;
  };

  const albumLength = getDuration(album);

  return (
    <>
      <HStack paddingY={2} paddingX={6}>
        <VStack>
          <Image
            w={{ sm: "100%", md: "50%", lg: "250px" }}
            src={album.images[0].url}
          />

          {/* small screen album details */}
          <Show below="md">
            <Text as="b">{album.name}</Text>
            {album.artists.map((artists, index) => (
              <Text key={index} fontSize="sm">
                {index === album.artists.length - 1
                  ? artists.name
                  : `${artists.name},`}
              </Text>
            ))}
            <Text fontSize="sm" color="gray.500">
              {setProjectType(album.total_tracks, album.album_type)} •{" "}
              {releaseDate}
            </Text>
          </Show>
        </VStack>

        {/* big screen album details */}
        <Show above="md">
          <VStack align="flex-start">
            <Text>{setProjectType(album.total_tracks, album.album_type)}</Text>
            <Heading size="xl">{album.name}</Heading>
            <HStack>
              {album.artists.map((artists, index) => (
                <Text key={index} as="b">
                  {artists.name} •{" "}
                </Text>
              ))}
              <Text>
                {releaseDate} • {album.total_tracks}{" "}
                {album.total_tracks === 1 ? "song" : "songs"},{" "}
                {formatAlbumLength(albumLength)}
              </Text>
            </HStack>
          </VStack>
        </Show>
      </HStack>
    </>
  );
};

export default AlbumHeader;
