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
import DesktopLayout from "./components/layouts/DesktopLLayout";


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

  const handleSelectedCompany = (company, zoom) => {
    setSelectedCompany(company);
    const newCenter = [company.lat, company.lon];
    const newZoom = zoom || map.getZoom();
    // Update the centre prop of MapContained instead of using setView
    map.setView(newCenter, newZoom, {
      animate: true,
    });
  };

  return (
    DesktopLayout(companyCategories, handleSelectedCompany, outerBounds, setSelectedCompany, setMap, companies, selectedCompany)
  );
}

export default App;
