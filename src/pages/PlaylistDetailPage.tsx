import { Box } from "@chakra-ui/react";
import PlaylistHeader from "../components/PlaylistHeader";
import PlaylistTracks from "../components/PlaylistTracks";
import NavButtons from "../components/NavButtons";

const PlaylistDetailPage = () => {
  return (
    <>
      <Box paddingY={2} paddingX={5}>
        <NavButtons />
      </Box>
      <PlaylistHeader />
      <PlaylistTracks />
    </>
  );
};

export default PlaylistDetailPage;
