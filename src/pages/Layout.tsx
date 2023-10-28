import { Grid, Show, GridItem, Card } from "@chakra-ui/react";
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

        <GridItem area="main" padding={2}>
          <Card>
            <Outlet />
          </Card>
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
