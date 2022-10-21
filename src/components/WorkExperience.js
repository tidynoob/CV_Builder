import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Grid,
    Button,
    GridItem,
    Textarea,
    Box,
    Flex,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useFormik } from "formik";
import CollapseButton from "./CollapseButton";
import uuid from "react-uuid";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

const SubmittedForm = (props) => {
    const id = props.id;
    const workExperience = props.workExperience.filter((item) => item.id === id)[0];
    const submitted = workExperience.submitted;
    const title = workExperience.title;
    const company = workExperience.company;

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
                    <Text as='b'>{title}</Text>
                    <Text>{company}</Text>
                </Flex>
                <Box>
                    <Button variant='outline' colorScheme='teal' ml='3' onClick={handleEdit} >Edit</Button>
                    <Button variant='outline' colorScheme='red' ml='3' onClick={handleDelete} >Delete</Button>
                </Box>
            </Flex>
        ))
    )

}

const WorkForm = (props) => {
    const setWorkExperience = props.setWorkExperience;
    const workExperience = props.workExperience;
    const submitted = workExperience.filter((item) => item.id === props.id)[0].submitted;
    const id = props.id;

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
                // color: "green",
            },
            todayBtnProps: {
                borderColor: "teal.500",
            }
        },
        inputProps: {
            //   size: "sm"
        }
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            company: '',
            description: '',
            dateStart: new Date(),
            dateEnd: new Date(),
        },
        onSubmit: (values) => {
            setWorkExperience(workExperience.map((item) => {
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
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Input onChange={formik.handleChange} value={formik.values.title} type="text" id="title" aria-describedby="title-helper-text" />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="company">Company</FormLabel>
                        <Input onChange={formik.handleChange} value={formik.values.company} type="text" id="company" aria-describedby="company-helper-text" />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="dateStart">Start Date</FormLabel>
                        <SingleDatepicker
                            name="dateStart"
                            date={formik.values.dateStart}
                            onDateChange={value => formik.setFieldValue('dateStart', value)}
                            usePortal='true'
                            propsConfigs={dateConfig}
                            maxDate={new Date()}
                        />
                    </FormControl>
                    <FormControl isDisabled={isDisabled}>
                        <FormLabel htmlFor="dateEnd">End Date</FormLabel>
                        <SingleDatepicker
                            name="dateEnd"
                            date={formik.values.dateEnd}
                            onDateChange={value => formik.setFieldValue('dateEnd', value)}
                            usePortal='true'
                            propsConfigs={dateConfig}
                            maxDate={new Date()}
                        />
                    </FormControl>
                    <GridItem colSpan={2}>
                        <FormControl isDisabled={isDisabled}>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Textarea onChange={formik.handleChange} value={formik.values.description} type="text" id="description" aria-describedby="description-helper-text" />
                        </FormControl>
                    </GridItem>
                </Grid>
                <Button isDisabled={isDisabled} type='submit' variant='solid' colorScheme='teal' ml='3'>Submit</Button>
                <Button onClick={handleDelete} variant='outline' colorScheme='red' ml='3'>Delete</Button>

            </form>
        )
    )

}

const WorkExperience = (props) => {

    const setWorkExperience = props.setWorkExperience;
    const workExperience = props.workExperience;

    const handleAdd = () => {
        setWorkExperience([...workExperience, { id: uuid(), submitted: false }]);
    }

    const handleEdit = (id) => {
        setWorkExperience(props.workExperience.map((item) => {
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
        setWorkExperience(props.workExperience.filter((item) => item.id !== id));
    }

    const forms = (
        <Box>
            {workExperience.map((item) => (
                <Box key={item.id}>
                    <WorkForm setWorkExperience={setWorkExperience} workExperience={workExperience} id={item.id} handleDelete={handleDelete}/>
                    <SubmittedForm setWorkExperience={setWorkExperience} workExperience={workExperience} id={item.id} handleEdit={handleEdit} handleDelete={handleDelete}/>
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
        <CollapseButton section='Work Experience' element={element} mt='6' />
    );
};

export default WorkExperience;