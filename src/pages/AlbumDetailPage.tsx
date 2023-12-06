import { Box } from "@chakra-ui/react";
import AlbumHeader from "../components/AlbumHeader";
import TrackList from "../components/TrackList";
import NavButtons from "../components/NavButtons";

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
