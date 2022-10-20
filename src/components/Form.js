import React from "react";
import {
    Box,
    Flex,
} from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

const Form = (props) => {
    const setPersonalInfo = props.setPersonalInfo
    const setWorkExperience = props.setWorkExperience
    const workExperience = props.workExperience

    return (
        <Box>
            <Flex width='full' align='flex-start' direction='column'>
                <PersonalInfo setPersonalInfo={setPersonalInfo} />
                <WorkExperience workExperience={workExperience} setWorkExperience={setWorkExperience}/>
            </Flex>
        </Box>

    );
};

export default Form