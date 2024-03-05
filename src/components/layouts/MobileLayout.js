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
      gridTemplateRows={"auto 1fr"}
      gridTemplateColumns={"0px 1fr"}
      h="100vh"
      w="100vw"
      overflow={"hidden"}
      padding={8}
      textAlign={"left"}
    >
      <GridItem area={"header"} display="flex" alignItems="center" justifyContent="space-between" paddingBottom={4}> {/* Header and Sidebar on the same row */}
        <Heading size="md">The UK Landscape of Cell & Gene Therapies</Heading>
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
