import { Grid, Show, GridItem, Card, HStack, Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import "../index.css";
import PlaybackTab from "../components/playback/PlaybackTab";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"
      "controls"   
      "mobile-nav" `,

          lg: `"nav main"
  "controls controls"
  `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "350px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="nav" padding={2} pos="fixed">
            <Navbar />
          </GridItem>
        </Show>

        <GridItem area="main" px={2} pt={2} pb={20}>
          <Card minH="700px">
            <HStack spacing={2} px={4} py={2}>
              <Box onClick={() => navigate(-1)}>
                <AiOutlineLeftCircle size="30px" />
              </Box>
              <Box onClick={() => navigate(+1)}>
                <AiOutlineRightCircle size="30px" />
              </Box>
            </HStack>
            <Outlet />
          </Card>
        </GridItem>

        <GridItem
          area="controls"
          pos="fixed"
          w="100%"
          bottom={0}
          zIndex={9999}
          pt={10}
        >
          <PlaybackTab />
        </GridItem>

        <Show below="lg">
          <GridItem area="mobile-nav" bg="green.300">
            Mobile Nav
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default Layout;
