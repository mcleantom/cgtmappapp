import React from "react";
import { Box, Heading, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from "@chakra-ui/react";
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
            <IconButton onClick={onOpen} display={"contents"} aria-label="Open Menu" position={"absolute"} icon={<FaBars />} />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} position={"absolute"}>
                <DrawerOverlay />
                <DrawerContent padding={4}>
                    <DrawerCloseButton />
                    <Heading>The UK Landscape of Cell & Gene Therapies</Heading>
                    <Text fontSize="sm" pb={2}>
                        A centralised list of cell and gene therapy companies and institutions in the UK.
                    </Text>
                    <Box overflowY="auto">
                        <CompanyTree tree={companyCategories} selectCompany={newHandleSelectedCompany} />
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    );
}
