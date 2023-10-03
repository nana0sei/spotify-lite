import { Grid, Show, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

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
      >
        <Show above="lg">
          <GridItem area="nav" padding={2}>
            <Navbar />
          </GridItem>
        </Show>

        <GridItem area="main" bg="yellow.300">
          <Outlet />
        </GridItem>

        <GridItem area="controls" bg="blue.300">
          Controls
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
