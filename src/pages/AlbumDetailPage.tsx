import { useParams } from "react-router-dom";
import useAlbum from "../hooks/UseAlbum";
import { Spinner, Text } from "@chakra-ui/react";

const AlbumDetailPage = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);

  if (isLoading) return <Spinner />;
  if (error || !album) throw error;
  return (
    <>
      <Text>{album.name}</Text>
    </>
  );
};

export default AlbumDetailPage;
