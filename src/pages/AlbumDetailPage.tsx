import { Box } from "@chakra-ui/react";
import AlbumHeader from "../components/AlbumHeader";
import TrackList from "../components/TrackList";

const AlbumDetailPage = () => {
  return (
    <>
      <Box padding={5}>
        <AlbumHeader />
        <TrackList />
      </Box>
    </>
  );
};

export default AlbumDetailPage;
