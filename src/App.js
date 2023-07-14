import "./App.css";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import Header from "./components/sections/Header";
import CompaniesMarkerGroup from "./components/sections/CompaniesMarkerGroup";
import SelectedCompany from "./components/sections/SelectedCompany";

function App() {
  const outerBounds = [
    [49.505, -12.09],
    [60.505, 2.09],
  ];

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={"50px 1fr 100px"}
      gridTemplateColumns={"300px 1fr"}
      h="100vh"
      w="100%"
    >
      <GridItem p="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem p="2" area={"nav"}>
        <Heading>The UK Map of Gene Cell Therepy</Heading>
        <Text fontSize="sm">The A-Z of gene cell therepy in the UK.</Text>
      </GridItem>
      <GridItem area={"main"} display={"block"} position="relative">
        <MapContainer
          zoom={5}
          maxZoom={18}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          bounds={outerBounds}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CompaniesMarkerGroup />
        </MapContainer>
        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex={1000}
          margin={"1rem"}
          borderRadius={"md"}
        >
          <SelectedCompany
            name="Cell and Gene Therapy Catapult"
            description={
              "The Cell and Gene Therapy Catapult was established as an independent centre of excellence to advance the growth of the UK cell and gene therapy industry, by bridging the gap between scientific research and full-scale commercialisation."
            }
            logo="https://images.unsplash.com/photo-1669940812749-0a0fa4b92ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            website="https://www.google.com"
          />
        </Box>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
