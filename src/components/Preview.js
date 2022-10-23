import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const fontSizes = {
    lg: '36px',
    md: '24px',
    sm: '18px',
    xs: '14px'
}

const PersonalInfo = (props) => {
    const personalInfo = props.personalInfo;
    const { firstName, lastName, email, phone } = personalInfo;


    return (
        <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Heading as='h2' fontSize={fontSizes.lg}>{firstName} {lastName}</Heading>
            <Stack dir="column" justify='center' align='flex-start' spacing='0'>
                <Text><Text as="b" size={fontSizes.sm}>email:</Text> {email}</Text>
                <Text><Text as="b" size={fontSizes.sm}>phone:</Text> {phone}</Text>
            </Stack>
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
            <Box display='flex' flexDirection='column' alignItems='flex-start' key={id}>
                <Heading as='h3' fontSize={fontSizes.md}>{title}</Heading>
                <Text as='b' fontSize={fontSizes.sm}>{company}</Text>
                <Text as='i' fontSize={fontSizes.sm}>{monthNames[dateStart.getMonth()]} {dateStart.getFullYear()} - {monthNames[dateEnd.getMonth()]} {dateEnd.getFullYear()}</Text>
                <Text className="description" size={fontSizes.xs}>{description}</Text>
            </Box>
        )
    });

    return (
        <Box>
            <Heading as='h2' fontSize={fontSizes.lg}>Work Experience</Heading>
            <Box mt='1' borderBottom='1px'></Box>
            {elements}
        </Box>
    )
}

const Education = (props) => {
    const education = props.education;

    const elements = education.map((item) => {
        const { id, school, degree, gradDate, gpa } = item;

        if (!school) return null;
        return (
            <Box key={id} display='flex' flexDir='column'>
                <Heading as='h3' fontSize={fontSizes.md}>{school}</Heading>
                <Text as='b' fontSize={fontSizes.sm}>{degree}</Text>
                <Text as='i' fontSize={fontSizes.sm}>{monthNames[gradDate.getMonth()]} {gradDate.getFullYear()}</Text>
                <Text fontSize={fontSizes.sm}>GPA: {gpa}</Text>
            </Box>
        )
    });

    return (
        <Box>
            <Heading as='h2' fontSize={fontSizes.lg}>Education</Heading>
            <Box mt='1' borderBottom='1px'></Box>
            {elements}
        </Box>
    )
}

class Preview extends React.Component {

    render() {
        return (
            <Box id="preview" bg='white' color='gray.800' borderWidth='1px' borderRadius='lg' p='3' shadow='base'>
                <PersonalInfo personalInfo={this.props.personalInfo} />
                <Box mt='3'></Box>
                <WorkExperience workExperience={this.props.workExperience} />
                <Box mt='3'></Box>
                <Education education={this.props.education} />

            </Box>
        )
    }
}

export default Preview;