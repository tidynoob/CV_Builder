import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PersonalInfo = (props) => {
    const personalInfo = props.personalInfo;
    const {firstName, lastName, email, phone} = personalInfo;

    return (
        <Box>
            <Heading as='h3'>{firstName} {lastName}</Heading>
            <Text><Text as="b">email:</Text> {email}</Text>
            <Text><Text as="b">phone:</Text> {phone}</Text>
        </Box>
    )

}

const Preview = (props) => {
    const personalInfo = props.personalInfo;
    // const workExperience = props.workExperience;

    return (
        <Box bg='white' color='gray.800' borderWidth='1px' width='full' height='full' borderRadius='lg' p='3'>
            <PersonalInfo personalInfo={personalInfo}/>
            <Box mt='1' borderBottom='1px'></Box>
        </Box>
    )
};

export default Preview;