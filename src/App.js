import "./App.css";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getCompanyData from "./components/sections/CompaniesParser";
import DesktopLayout from "./components/layouts/DesktopLayout";
import MobileLayout from "./components/layouts/MobileLayout";

function App() {
  const outerBounds = [
    [49.505, -12.09],
    [60.505, 2.09],
  ];

  const [companies, setCompanies] = useState([]);
  const [companyCategories, setCompanyCategories] = useState({});
  const [map, setMap] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile] = useMediaQuery("(max-width: 780px)");


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

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
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
    if (company) {
      const newCenter = [company.lat, company.lon];
      const newZoom = zoom || map.getZoom();
      // Update the centre prop of MapContained instead of using setView
      map.setView(newCenter, newZoom, {
        animate: true,
      });
    }
  };

  return (
    <div className="App">
      {isMobile ? (
        <MobileLayout
          companies={companies}
          companyCategories={companyCategories}
          selectedCompany={selectedCompany}
          setSelectedCompany={handleSelectedCompany}
          zoomToLatLong={zoomToLatLong}
          outerBounds={outerBounds}
          setMap={setMap}
          handleSelectedCompany={handleSelectedCompany}
        />
      ) : (
        <DesktopLayout
          companies={companies}
          companyCategories={companyCategories}
          selectedCompany={selectedCompany}
          setSelectedCompany={handleSelectedCompany}
          zoomToLatLong={zoomToLatLong}
          outerBounds={outerBounds}
          setMap={setMap}
          handleSelectedCompany={handleSelectedCompany}
        />
      )}
    </div>
  )
}

export default App;
