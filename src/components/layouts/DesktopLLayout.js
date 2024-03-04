import React from "react";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import CompanyTree from "../sections/CompanyTree";
import Map from "../Map";


export default function DesktopLayout(companyCategories, handleSelectedCompany, outerBounds, setSelectedCompany, setMap, companies, selectedCompany) {
    return <Grid
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
        <Heading>The UK Landscape of Cell & Gene Therapies</Heading>
        <Text fontSize="sm" pb={2}>
          A centralised list of cell and gene therapy companies and institutions in the UK.
        </Text>
        <CompanyTree tree={companyCategories} selectCompany={handleSelectedCompany} />
      </GridItem>
      <GridItem area={"main"} display={"block"} position="relative" borderRadius={"30px"} borderColor={"black"}>
        {Map(outerBounds, setSelectedCompany, setMap, companies, handleSelectedCompany, selectedCompany)}
      </GridItem>
    </Grid>;
  }
