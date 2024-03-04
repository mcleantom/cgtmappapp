import React from "react";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import CompanyTree from "../sections/CompanyTree";
import CompaniesMarkerGroup from "../sections/CompaniesMarkerGroup";
import SelectedCompany from "../sections/SelectedCompany";


function ClickHandler(events) {
    const map = useMapEvents({
      click: (e) => {
        events.onClick(e);
      },
    });
    return null;
}


export default function DesktopLayout(companyCategories, handleSelectedCompany, outerBounds, setSelectedCompany, setMap, companies, selectedCompany) {
    return <Grid
      templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
      gridTemplateRows={"0px 1fr"}
      gridTemplateColumns={"300px 1fr"}
      h="100vh"
      w="100vw"
      overflow={"hidden"}
      padding={'30px'}
    >
      {/* <GridItem p="2" area={"header"}>
            <Header />
          </GridItem> */}
      <GridItem p="2" area={"nav"} overflowY="auto">
        <Heading>The UK Landscape of Cell & Gene Therapies</Heading>
        <Text fontSize="sm" pb={2}>
          A centralised list of cell and gene therapy companies and institutions in the UK.
        </Text>
        <CompanyTree tree={companyCategories} selectCompany={handleSelectedCompany} />
      </GridItem>
      <GridItem area={"main"} display={"block"} position="relative" borderRadius={"30px"} borderColor={"black"}>
        <MapContainer
          zoom={5}
          maxZoom={18}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "0 30px 30px 0",
          }}
          zoomControl={false}
          bounds={outerBounds}
          onClick={(e) => {
            setSelectedCompany(null);
          } }
          attributionControl={false}
          ref={setMap}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CompaniesMarkerGroup
            companies={companies}
            onClick={(e, clickedCompany) => handleSelectedCompany(clickedCompany)} />
          <ClickHandler
            onClick={(e) => {
              setSelectedCompany(null);
            } } />
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
    </Grid>;
  }