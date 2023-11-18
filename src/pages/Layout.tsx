import { Grid, Show, GridItem, Card } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../index.css";

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

        <GridItem area="main" px={2} pt={2} pb={10}>
          <Card minH="700px">
            <Outlet />
          </Card>
        </GridItem>

        <GridItem
          area="controls"
          bg="blue.300"
          pos="fixed"
          w="100%"
          bottom={0}
          zIndex={9999}
        >
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
