import { Flex, Container } from '@chakra-ui/react';
import React from "react";
import Logo from "../../logo.svg";
const CTA = "Get Started"


export default function Header() {
  return (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="primary.500"
        color="black"
        w="100%"
        mb={8}
    >
        <Container
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            maxW="1200px"
        >
            <Flex align="center" mr={5}>
                Map App
            </Flex>
        </Container>
    </Flex>
  );
}