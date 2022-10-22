import React from "react";
import {
    Box,
    // Grid,
} from "@chakra-ui/react";
import Form from "../components/Form";
import Preview from "../components/Preview";

const Main = () => {
    const [personalInfo, setPersonalInfo] = React.useState({});
    const [workExperience, setWorkExperience] = React.useState([]);
    const [education, setEducation] = React.useState([]);

    return (
        // <Grid templateColumns={['','', "1fr auto"]} gap='6'>
        <Box display='flex' flexDirection={['column','column','row']} justifyContent='space-between'>
            <Box p='6' w='full'>
                <Form 
                    setPersonalInfo={setPersonalInfo}
                    setWorkExperience={setWorkExperience}
                    workExperience={workExperience}
                    education={education}
                    setEducation={setEducation} />
            </Box>
            <Box p='6'>
                <Preview
                    personalInfo={personalInfo}
                    workExperience={workExperience}
                    education={education} />
            </Box>
        </Box>

        // </Grid>
    );
};

export default Main;