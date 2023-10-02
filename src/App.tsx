import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
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
          <GridItem area="nav" bg="orange.300">
            NavBar
          </GridItem>
        </Show>

        <GridItem area="main" bg="yellow.300">
          Main
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
}

export default App;
