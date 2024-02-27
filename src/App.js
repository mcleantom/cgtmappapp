import "./App.css";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import Header from "./components/sections/Header";
import CompaniesMarkerGroup from "./components/sections/CompaniesMarkerGroup";
import SelectedCompany from "./components/sections/SelectedCompany";
import { useEffect, useState } from "react";
import getCompanyData from "./components/sections/CompaniesParser";
import CompanyTree from "./components/sections/CompanyTree";

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

  const [companies, setCompanies] = useState([]);
  const [companyCategories, setCompanyCategories] = useState({});
  const [map, setMap] = useState(null);

  useEffect(() => {
    getCompanyData().then((data) => {
      setCompanies(data);

      // create a map of companies by category
      const companyCategories = {};
      data.forEach((company) => {
        if (!companyCategories[company.category]) {
          companyCategories[company.category] = [];
        }
        companyCategories[company.category].push(company);
      });

      // sort the companies in each category by name
      Object.keys(companyCategories).forEach((category) => {
        companyCategories[category].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      });
      
      setCompanyCategories(companyCategories);

    });
  }, []);


  const [selectedCompany, setSelectedCompany] = useState(null);

  const zoomToLatLong = (lat, lon) => {
    map.setView(
      [lat, lon],
      15,
      {
        animate: true,
      }
    );
  };

  const handleSelectedCompany = (company) => {
    setSelectedCompany(company);
    zoomToLatLong(company.lat, company.lon);
  };

  return (
    <Grid
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
        <Heading>The UK Map of Cell & Gene Therapies</Heading>
        <Text fontSize="sm" pb={2}>
          The A-Z of Cell and Gene therapies in the UK.
        </Text>
        <CompanyTree tree={companyCategories} selectCompany={handleSelectedCompany}/>
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
          }}
          attributionControl={false}
          ref={setMap}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CompaniesMarkerGroup
            companies={companies}
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
      {/* <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem> */}
    </Grid>
  );
}

export default App;
