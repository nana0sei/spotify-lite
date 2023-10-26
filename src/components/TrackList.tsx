import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { Spinner, Text } from "@chakra-ui/react";

const TrackList = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;
  return (
    <>
      {album.tracks.items.map((tracks, index) => (
        <Text key={index}>{tracks.name}</Text>
      ))}
    </>
  );
};

export default TrackList;
