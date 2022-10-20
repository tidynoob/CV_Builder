import React from "react";
import {
    Box,
    Grid,
} from "@chakra-ui/react";
import Form from "../components/Form";
import Preview from "../components/Preview";

const Main = () => {
    const [personalInfo, setPersonalInfo] = React.useState({});
    const [workExperience, setWorkExperience] = React.useState([]);

    return (
        <Grid templateColumns="1fr 1fr" gap='6'>
            <Box p='6' w='full'>
                <Form 
                    setPersonalInfo={setPersonalInfo}
                    setWorkExperience={setWorkExperience}
                    workExperience={workExperience}/>
            </Box>
            <Box p='6'>
                <Preview
                    personalInfo={personalInfo}
                    workExperience={workExperience} />
            </Box>

        </Grid>
    );
};

export default Main;