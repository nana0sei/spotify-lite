import { Box } from "@chakra-ui/react";
import AlbumHeader from "../components/album/AlbumHeader";
import TrackList from "../components/album/TrackList";
import NavButtons from "../components/navbar/NavButtons";

const AlbumDetailPage = () => {
  return (
    <>
      <Box paddingY={2} paddingX={5}>
        <NavButtons />
      </Box>
      <AlbumHeader />
      <TrackList />
    </>
  );
};

export default AlbumDetailPage;
