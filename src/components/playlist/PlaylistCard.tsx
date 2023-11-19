import { useParams } from "react-router-dom";
import usePlaylist from "../../hooks/usePlaylist";
import { Card, Spinner, Image, Text, CardBody } from "@chakra-ui/react";

const PlaylistCard = () => {
  const { playlist_id } = useParams();
  const { data: playlist, isLoading, error } = usePlaylist(playlist_id!);

  if (isLoading) return <Spinner />;
  if (error || !playlist) throw error;

  return (
    <Card padding={2}>
      <Image src={playlist.images[0].url} />
      <CardBody>
        <Text as="b">{playlist.name}</Text>
        <Text>{playlist.description}</Text>
      </CardBody>
    </Card>
  );
};

export default PlaylistCard;
