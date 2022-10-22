import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Grid,
    Button,
    // GridItem,
    // Textarea,
    Box,
    Flex,
    Text,
    useColorModeValue,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useFormik } from "formik";
import CollapseButton from "./CollapseButton";
import uuid from "react-uuid";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

const SubmittedForm = (props) => {
    const id = props.id;
    const education = props.education.filter((item) => item.id === id)[0];
    const submitted = education.submitted;
    const school = education.school;
    const degree = education.degree;

    const handleEdit = () => {
        props.handleEdit(id);
    }
    const handleDelete = () => {
        props.handleDelete(id);
    }

    return (
        (submitted && (
            <Flex mt='3' p='3' borderWidth='1px' borderRadius='md' justifyContent='space-between' alignItems='center' >
                <Flex alignItems='flex-start' justify='center' direction='column'>
                    <Text as='b'>{school}</Text>
                    <Text>{degree}</Text>
                </Flex>
                <Box display='flex' justifyContent='center'>
                    <Button variant='outline' colorScheme='teal' ml='3' onClick={handleEdit} >Edit</Button>
                    <Button variant='outline' colorScheme='red' ml='3' onClick={handleDelete} >Delete</Button>
                </Box>
            </Flex>
        ))
    )

}

const EducationForm = (props) => {
    const setEducation = props.setEducation;
    const education = props.education;
    const id = props.id;
    const submitted = education.filter((item) => item.id === id)[0].submitted;

    const dateConfig = {
        dateNavBtnProps: {
            colorScheme: "teal",
            variant: "ghost"
        },
        dayOfMonthBtnProps: {
            defaultBtnProps: {
                borderColor: "teal.500",
                variant: "outline",
                _hover: {
                    background: useColorModeValue('teal.50', 'rgba(129, 230, 217, 0.12)')
                },
                _active: {
                    background: useColorModeValue('teal.100', 'rgba(129, 230, 217, 0.24)')
                }
            },
            selectedBtnProps: {
                background: useColorModeValue('teal.100', 'rgba(129, 230, 217, 0.24)')
            },
            todayBtnProps: {
                borderColor: "teal.500",
            }
        },
        inputProps: {
        }
    };

    const formik = useFormik({
        initialValues: {
            school: '',
            degree: '',
            gpa: '',
            gradDate: new Date(),
        },
        onSubmit: (values) => {
            setEducation(education.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        ...values,
                        submitted: true,
                    };
                }
                return item;
            }));
        }
    });

    const isDisabled = submitted ? true : false;

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    }

    const handleDelete = () => {
        props.handleDelete(id);
    }

    return (
        (!submitted &&
            <form onSubmit={handleSubmit}>
                <Grid p='3' gap='3' templateColumns='1fr 1fr'>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="school">School</FormLabel>
                        <Input onChange={formik.handleChange} value={formik.values.school} type="text" id="school" />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="gradDate">Graduation Date</FormLabel>
                        <SingleDatepicker
                            name="gradDate"
                            date={formik.values.gradDate}
                            onDateChange={value => formik.setFieldValue('gradDate', value)}
                            usePortal='true'
                            propsConfigs={dateConfig}
                            maxDate={new Date()}
                        />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="degree">Degree</FormLabel>
                        <Input onChange={formik.handleChange} value={formik.values.degree} type="text" id="degree" />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="gpa">GPA</FormLabel>
                        <NumberInput step={.1} min={0.0} max={4.0}>
                            <NumberInputField onChange={formik.handleChange} value={formik.values.gpa} id='gpa' />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </Grid>
                <Button isDisabled={isDisabled} type='submit' variant='solid' colorScheme='teal' ml='3'>Submit</Button>
                <Button onClick={handleDelete} variant='outline' colorScheme='red' ml='3'>Delete</Button>

            </form>
        )
    )

}

const Education = (props) => {

    const setEducation = props.setEducation;
    const education = props.education;

    const handleAdd = () => {
        setEducation([...education, { id: uuid(), submitted: false }]);
    }

    const handleEdit = (id) => {
        setEducation(props.education.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    submitted: false,
                };
            }
            return item;
        }));
    };

    const handleDelete = (id) => {
        setEducation(props.education.filter((item) => item.id !== id));
    }

    const forms = (
        <Box>
            {education.map((item) => (
                <Box key={item.id}>
                    <EducationForm setEducation={setEducation} education={education} id={item.id} handleDelete={handleDelete} />
                    <SubmittedForm setEducation={setEducation} education={education} id={item.id} handleEdit={handleEdit} handleDelete={handleDelete} />
                </Box>
            ))}
        </Box>
    );

    const element = (
        <Box>
            {forms}
            <Button ml='3' mt='3' leftIcon={<AddIcon />} variant='ghost' colorScheme='teal' onClick={handleAdd}>Add</Button>
        </Box>

    )

    return (
        <CollapseButton section='Education' element={element} mt='6' />
    );
};

export default Education;