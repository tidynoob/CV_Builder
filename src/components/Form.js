import React from "react";
import {
    Box,
    Flex,
} from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Form = (props) => {
    const setPersonalInfo = props.setPersonalInfo
    const setWorkExperience = props.setWorkExperience
    const workExperience = props.workExperience
    const education = props.education
    const setEducation = props.setEducation

    return (
        <Box>
            <Flex align='flex-start' direction='column'>
                <PersonalInfo setPersonalInfo={setPersonalInfo} />
                <WorkExperience workExperience={workExperience} setWorkExperience={setWorkExperience}/>
                <Education education={education} setEducation={setEducation}/>
            </Flex>
        </Box>

    );
};

export default Form