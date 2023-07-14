import getCompanyData from "./CompaniesParser";
import MarkerClusterGroup from "react-leaflet-cluster";
import CompanyIcon from "./CompanyIcon";
import { useState, useEffect } from "react";

export default function CompaniesMarkerGroup({ onClick }) {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    getCompanyData().then((data) => {
      setCompanyData(data);
    });
  }, []);

  return (
    <MarkerClusterGroup>
      {companyData.map((company) => {
        return <CompanyIcon company={company} onClick={onClick} />;
      })}
    </MarkerClusterGroup>
  );
}
