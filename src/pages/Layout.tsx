import { Grid, Show, GridItem, Card } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../index.css";
import PlaybackTab from "../components/playback/PlaybackTab";
import MobileNav from "../components/navbar/MobileNav";

const Layout = () => {
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

        <GridItem area="main" px={2} pt={2} pb="130px">
          <Card pb={5}>
            <Outlet />
          </Card>
        </GridItem>

        <GridItem area="controls" pos="fixed" w="100%" bottom={0} zIndex={9999}>
          <PlaybackTab />
          <Show below="md">
            <MobileNav />
          </Show>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
