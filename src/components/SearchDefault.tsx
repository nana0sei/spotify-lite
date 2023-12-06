import { Box, Heading } from "@chakra-ui/react";
import FeaturedPlaylist from "./FeaturedPlaylist";

const SearchDefault = () => {
  return (
    <>
      <Box pt={5}>
        <Heading fontSize="2xl">Featured playlists</Heading>
        <FeaturedPlaylist />
      </Box>
    </>
  );
};

export default SearchDefault;
