import React from "react";
import { GridItem, Heading, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import CompanyTree from "./sections/CompanyTree";

export default function Sidebar(companyCategories, handleSelectedCompany) {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

    return (
        <>
            {/* Mobile */}
            <IconButton onClick={onOpen} display={{ base: 'flex', md: 'none' }} aria-label="Open Menu" position={"absolute"} m={4} icon={<FaBars />} />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} position={"absolute"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <CompanyTree tree={companyCategories} selectCompany={handleSelectedCompany} />
                </DrawerContent>
            </Drawer>

            {/* Desktop */}
            <GridItem p="2" area={"nav"} overflowY="auto">
                <Heading>The UK Landscape of Cell & Gene Therapies</Heading>
                <Text fontSize="sm" pb={2}>
                    A centralised list of cell and gene therapy companies and institutions in the UK.
                </Text>
                <CompanyTree tree={companyCategories} selectCompany={handleSelectedCompany} />
            </GridItem>;
        </>
    );
}
