import React from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function SidebarHeader() {
    return (
        <Flex justifyContent="space-between" px='1' py='1'>
            <Heading as='h1' size='lg'>Resume Builder</Heading>
            <Flex justifyContent="center">
                <ColorModeSwitcher />
                <IconButton aria-label="Open/Close Menu" variant='outline' icon={<HamburgerIcon />} />
            </Flex>
        </Flex>
    );
}


export default function Sidebar() {
    return (
        <Flex w='sm' flexDir='column'>
            <SidebarHeader />
        </Flex>
    );
}