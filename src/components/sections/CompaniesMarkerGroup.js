import getCompanyData from "./CompaniesParser";
import MarkerClusterGroup from "react-leaflet-cluster";
import CompanyIcon from "./CompanyIcon";
import {useState, useEffect} from "react";

export default function CompaniesMarkerGroup() {
    const [companyData, setCompanyData] = useState([]);
    
    useEffect(() => {
        getCompanyData().then((data) => {
            setCompanyData(data);
        });
    }, []);

    return (
        <MarkerClusterGroup>
            {companyData.map((company, indexOf) => {
                return (
                    <CompanyIcon position={[company.lat, company.lon]} name={company.name} logo={company.logo}/>
                );
            })}
        </MarkerClusterGroup>
    );
}