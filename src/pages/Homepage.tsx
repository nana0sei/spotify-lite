import { Box, Heading } from "@chakra-ui/react";
import HomeAlbums from "../components/HomeAlbums";
import NewReleases from "../components/NewReleases";
import NavButtons from "../components/navbar/NavButtons";

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
      <Box paddingY={2} paddingX={5}>
        <NavButtons />
      </Box>
      <Box px={5} py={2}>
        <Heading fontSize="3xl">{greeting}</Heading>
        <HomeAlbums />

        <Box pt={5}>
          <Heading fontSize="2xl">New releases</Heading>
          <NewReleases />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
