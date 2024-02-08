import getCompanyData from "./CompaniesParser";
import MarkerClusterGroup from "react-leaflet-cluster";
import CompanyIcon from "./CompanyIcon";
import { useState, useEffect } from "react";

export default function CompaniesMarkerGroup({ companies, onClick }) {
  return (
    <MarkerClusterGroup>
      {companies.map((company) => {
        return <CompanyIcon company={company} onClick={onClick} />;
      })}
    </MarkerClusterGroup>
  );
}
