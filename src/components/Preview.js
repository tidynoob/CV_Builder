import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const PersonalInfo = (props) => {
    const personalInfo = props.personalInfo;
    const { firstName, lastName, email, phone } = personalInfo;


    return (
        <Box>
            <Heading as='h2' size='xl'>{firstName} {lastName}</Heading>
            <Text><Text as="b">email:</Text> {email}</Text>
            <Text><Text as="b">phone:</Text> {phone}</Text>
        </Box>
    )

}

const WorkExperience = (props) => {
    const workExperience = props.workExperience;

    const elements = workExperience.map((item) => {
        const { id, title, company, dateStart, dateEnd, description } = item;
        // console.log(description);

        if (!title) return null;
        return (
            <Box key={id}>
                <Heading as='h3' size='md'>{title}</Heading>
                <Text as='b'>{company}</Text>
                <Text>{monthNames[dateStart.getMonth()]} {dateStart.getFullYear()} - {monthNames[dateEnd.getMonth()]} {dateEnd.getFullYear()}</Text>
                <Text className="description">{description}</Text>
            </Box>
        )
    });

    return (
        <Box>
            <Heading as='h2' size='xl'>Work Experience</Heading>
            {elements}
        </Box>
    )
}

const Education = (props) => {
    const education = props.education;

    const elements = education.map((item) => {
        const { id, school, degree, gradDate, gpa} = item;

        if (!school) return null;
        return (
            <Box key={id}>
                <Heading as='h3' size='md'>{school}</Heading>
                <Text as='b'>{degree}</Text>
                <Text>{monthNames[gradDate.getMonth()]} {gradDate.getFullYear()} </Text>
                <Text>GPA: {gpa}</Text>
            </Box>
        )
    });

    return (
        <Box>
            <Heading as='h2' size='xl'>Education</Heading>
            {elements}
        </Box>
    )
}


const Preview = (props) => {

    return (
        <Box id="preview" bg='white' color='gray.800' borderWidth='1px' borderRadius='lg' p='3'>
            <PersonalInfo personalInfo={props.personalInfo} />
            <Box mt='1' borderBottom='1px'></Box>
            <WorkExperience workExperience={props.workExperience} />
            <Box mt='1' borderBottom='1px'></Box>
            <Education education={props.education} />

        </Box>
    )
};

export default Preview;