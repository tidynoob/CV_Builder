import React from "react";
import {
    Button,
    useDisclosure,
    Collapse
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const CollapseButton = ({section, element, mt}) => {
    const { isOpen, onToggle } = useDisclosure();

    const icon = isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />;

    return (
        <>
            <Button mt={mt} leftIcon={icon} onClick={onToggle} width='full'>{section}</Button>
            <Collapse in={isOpen} animateOpacity>
                {element}
            </Collapse>
        </>
    );
};


export default CollapseButton;