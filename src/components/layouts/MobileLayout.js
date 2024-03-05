import React from "react";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import CompanyTree from "../sections/CompanyTree";
import Map from "../Map";
import Sidebar from "../Sidebar";


export default function DesktopLayout({companyCategories, handleSelectedCompany, outerBounds, setSelectedCompany, setMap, companies, selectedCompany}) {
    return <Grid
      templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"0px 1fr"}
      h="100vh"
      w="100vw"
      overflow={"hidden"}
      padding={'30px'}
      textAlign={"left"}
    >
      <GridItem area={"header"}>
        <Sidebar
            companyCategories={companyCategories}
            handleSelectedCompany={handleSelectedCompany}
        />
      </GridItem>
      <GridItem p="2" area={"nav"} overflowY="auto">

      </GridItem>
      <GridItem area={"main"} display={"block"} position="relative" borderRadius={"30px"} borderColor={"black"}>
        <Map 
            outerBounds={outerBounds}
            setSelectedCompany={setSelectedCompany}
            setMap={setMap}
            companies={companies}
            handleSelectedCompany={handleSelectedCompany}
            selectedCompany={selectedCompany}
        />
      </GridItem>
    </Grid>;
  }
