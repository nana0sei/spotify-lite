import Navbar from "../components/navbar/Navbar";
import { Grid, Show, GridItem } from "@chakra-ui/react";
import ErrorMessage from "../components/ErrorMessage";

const ErrorPage = () => {
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
          <GridItem area="nav" padding={2}>
            <Navbar />
          </GridItem>
        </Show>

        <GridItem area="main">
          <ErrorMessage />
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

export default ErrorPage;
