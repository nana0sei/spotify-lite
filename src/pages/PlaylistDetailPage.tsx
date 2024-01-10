import { Box } from "@chakra-ui/react";
import PlaylistHeader from "../components/playlist/PlaylistHeader";
import PlaylistTracks from "../components/playlist/PlaylistTracks";
import NavButtons from "../components/navbar/NavButtons";

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
