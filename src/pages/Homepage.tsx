import { Box, Heading } from "@chakra-ui/react";
import HomeAlbums from "../components/HomeAlbums";
import FeaturedPlaylist from "../components/FeaturedPlaylist";

const Homepage = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 16) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
      <Box px={5} pt={5}>
        <Heading fontSize="3xl">{greeting}</Heading>
        <HomeAlbums />

        <Box pt={5}>
          <Heading fontSize="2xl">Featured playlists</Heading>
          <FeaturedPlaylist />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
