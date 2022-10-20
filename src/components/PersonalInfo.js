import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Grid,
    Button,
    useBoolean,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import CollapseButton from "./CollapseButton";

const PersonalInfo = (props) => {

    const setPersonalInfo = props.setPersonalInfo;

    const [submitted, setSubmitted] = useBoolean();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        onSubmit: (values) => {
            setPersonalInfo(values);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted.on();
        formik.handleSubmit();
    };

    const handleEdit = () => {
        setSubmitted.off();
    };

    const isDisabled = submitted ? true : false;

    const element = (
        <form onSubmit={handleSubmit}>
            <Grid p='3' gap='3' templateColumns='1fr 1fr'>
                <FormControl isDisabled={isDisabled}>
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <Input onChange={formik.handleChange} value={formik.values.firstName} type="text" id="firstName" aria-describedby="first-name-helper-text" />
                </FormControl>
                <FormControl isDisabled={isDisabled}>
                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <Input onChange={formik.handleChange} value={formik.values.lastName} type="text" id="lastName" aria-describedby="last-name-helper-text" />
                </FormControl>
                <FormControl isDisabled={isDisabled}>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input onChange={formik.handleChange} value={formik.values.email} type="email" id="email" aria-describedby="email-helper-text" />
                </FormControl>
                <FormControl isDisabled={isDisabled}>
                    <FormLabel htmlFor="phone">Phone number</FormLabel>
                    <Input onChange={formik.handleChange} value={formik.values.phone} type="tel" id="phone" aria-describedby="phone-helper-text" />
                </FormControl>
            </Grid>
            <Button isDisabled={isDisabled} type='submit' variant='solid' colorScheme='teal' ml='3'>Submit</Button>
            <Button isDisabled={!isDisabled} onClick={handleEdit} variant='outline' colorScheme='teal' ml='3'>Edit</Button>

        </form>

    )

    return (
        <CollapseButton section='Personal Information' element={element} />
    );
};

export default PersonalInfo;