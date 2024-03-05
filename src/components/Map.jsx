import React from "react";
import { Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import CompaniesMarkerGroup from "./sections/CompaniesMarkerGroup";
import SelectedCompany from "./sections/SelectedCompany";


function ClickHandler(events) {
    const map = useMapEvents({
        click: (e) => {
            events.onClick(e);
        },
    });
    return null;
}


export default function Map({ outerBounds, setSelectedCompany, setMap, companies, handleSelectedCompany, selectedCompany }) {
    return (
        <>
            <Box width={"100%"} height={"100%"}>
                <MapContainer
                    zoom={5}
                    maxZoom={18}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "30px",
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
                        onClick={(e, clickedCompany) => handleSelectedCompany(clickedCompany)} />
                    <ClickHandler
                        onClick={(e) => {
                            setSelectedCompany(null);
                        }} />
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
            </Box>
        </>
    )
}