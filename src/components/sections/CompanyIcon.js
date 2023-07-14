import L, { divIcon, icon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";
import { Image, Box, AspectRatio, Text, Heading } from "@chakra-ui/react";
import Markdown from "react-markdown";

export default function CompanyIcon({ company, onClick }) {
  const iconMarkup = renderToStaticMarkup(
    <div
      class="bottom-arrow"
      style={{
        background: "blue",
        width: "50px",
        height: "50px",
        display: "block",
        position: "relative",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "10px",
          left: "10px",
          bottom: "10px",
          right: "10px",
        }}
      >
        <img style={{ height: "100%", width: "100%" }} src={company.logo} />
      </div>
    </div>
  );

  const customMarkerIcon = divIcon({
    className: "",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [1, -34],
    html: iconMarkup,
  });

  return (
    <Marker
      position={[company.lat, company.lon]}
      icon={customMarkerIcon}
      eventHandlers={{
        click: (e) => {
          onClick(e, company);
        },
      }}
    ></Marker>
  );
}
