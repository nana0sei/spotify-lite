import { useParams } from "react-router-dom";
import useAlbum from "../../hooks/useAlbum";
import {
  HStack,
  Heading,
  Image,
  Show,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Album from "../../entities/Album";
import useFormatQueryStore from "../../queries/format-store";

const AlbumHeader = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);
  const { formatAlbumLength, setProjectType } = useFormatQueryStore();

  if (isLoading) return <Skeleton boxSize="300px" marginY={5} marginX={10} />;
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
        <Image boxSize="300px" src={album.images[0].url} />

        <Show above="md">
          <VStack align="flex-start">
            <Text>{setProjectType(album.total_tracks, album.album_type)}</Text>
            <Heading size="3xl">{album.name}</Heading>
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
