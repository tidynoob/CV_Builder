import React from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Flex, Heading, Button } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex w='full' flexDir='row' px='4' py='2' boxShadow="md" borderRadius='base' zIndex='sticky' justifyContent='space-between' alignItems='center'>
            <Heading as='h1' size='lg'>Resume Builder</Heading>
            <Flex justifyContent="center">
                <Button colorScheme="teal" variant='solid' mr='2'>Print</Button>
                <ColorModeSwitcher />
            </Flex>
        </Flex>
    );
}