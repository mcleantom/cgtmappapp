import React from "react";
import { GridItem, Heading, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import CompanyTree from "./sections/CompanyTree";

export default function Sidebar({ companyCategories, handleSelectedCompany }) {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

    // when a company is selected, close the sidebar
    const newHandleSelectedCompany = (company, zoom) => {
        handleSelectedCompany(company, zoom);
        onClose();
    };

    return (
        <>
            <IconButton onClick={onOpen} display={{ base: 'flex', md: 'none' }} aria-label="Open Menu" position={"absolute"} m={4} icon={<FaBars />} padding={0} margin={0} />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} position={"absolute"}>
                <DrawerOverlay />
                <DrawerContent padding={4}>
                    <DrawerCloseButton />
                    <Heading>The UK Landscape of Cell & Gene Therapies</Heading>
                    <Text fontSize="sm" pb={2}>
                        A centralised list of cell and gene therapy companies and institutions in the UK.
                    </Text>
                    <CompanyTree tree={companyCategories} selectCompany={newHandleSelectedCompany} />
                </DrawerContent>
            </Drawer>
        </>
    );
}
