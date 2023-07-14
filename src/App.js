import "./App.css";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import Header from "./components/sections/Header";
import CompaniesMarkerGroup from "./components/sections/CompaniesMarkerGroup";
import SelectedCompany from "./components/sections/SelectedCompany";
import { useState } from "react";

function ClickHandler(events) {
  const map = useMapEvents({
    click: (e) => {
      events.onClick(e);
    },
  });
  return null;
}

function App() {
  const outerBounds = [
    [49.505, -12.09],
    [60.505, 2.09],
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectedCompany = (company) => {
    setSelectedCompany(company);
  };

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
        <Heading>The UK Map of Cell & Gene Therapies</Heading>
        <Text fontSize="sm">The A-Z of Cell and Gene therapies in the UK.</Text>
      </GridItem>
      <GridItem area={"main"} display={"block"} position="relative">
        <MapContainer
          zoom={5}
          maxZoom={18}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          bounds={outerBounds}
          onClick={(e) => {
            setSelectedCompany(null);
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CompaniesMarkerGroup
            onClick={(e, clickedCompany) =>
              handleSelectedCompany(clickedCompany)
            }
          />
          <ClickHandler
            onClick={(e) => {
              setSelectedCompany(null);
            }}
          />
        </MapContainer>
        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex={1000}
          margin={"1rem"}
          borderRadius={"md"}
        >
          {selectedCompany && <SelectedCompany company={selectedCompany} />}
        </Box>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
