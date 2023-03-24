import React from 'react'
import { Image,Flex, Box, FormControl,FormLabel,FormErrorMessage,Input,Select,Textarea,VStack,Button,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,Heading} from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReservedLogo from '../assets/reserved.jpg';

const Reservation = () => {
    const formik = useFormik({
        initialValues: {firstName: '',lastName: '',email: '',},
        onSubmit: values => {alert(JSON.stringify(values, null, 2));},
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            lastName: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            number:Yup.number()
            .required(),
            textarea:Yup.string()
            .max(250,'Maximum 250 words may be used!')
            .min(10,'Minimum 10 words may be used!')
            ,
            dateandtime:Yup.date().required('Required')
            ,
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
          }),
      });

    return(
        <Box >
        <Heading id='Reservation' color='#5C5858' margin='4rem' marginLeft='5rem' size='2xl'>Make a Reservation</Heading>
        <Flex flexDirection={{base:'column',lg:'row'}} bg='#F8F8FF' borderRadius='2rem'  border='1px solid #B6B6B4' p={6} margin='0 4rem'>
            <Image marginBottom={{base:'2rem'}} borderRadius='2rem' width={{base:'100%',lg:'50%'}} alt='reservation-logo' src={ReservedLogo}/>
            <VStack marginLeft={{base:'3.5rem',lg:'7rem'}} gap={4} width={{base:'60%',lg:'30%'}}>
                <FormControl isRequired isInvalid={formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel color='#5C5858' htmlFor="firstName">First Name</FormLabel>
                    <Input {...formik.getFieldProps('firstName')} placeHolder='First Name' />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formik.errors.lastName && formik.touched.lastName}>
                    <FormLabel color='#5C5858' htmlFor="lastName">Last Name</FormLabel>
                    <Input {...formik.getFieldProps('lastName')} placeHolder='Last Name' />
                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formik.errors.email && formik.touched.email}>
                    <FormLabel color='#5C5858' htmlFor="email">Email</FormLabel>
                    <Input {...formik.getFieldProps('email')} placeHolder='Email' />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel color='#5C5858'>Number of People</FormLabel>
                    <NumberInput {...formik.getFieldProps('number')} max={10} min={2}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl isRequired isInvalid={formik.errors.dateandtime && formik.touched.dateandtime}>
                    <FormLabel color='#5C5858'>Date & Time</FormLabel>
                    <Input {...formik.getFieldProps('dateandtime')} type='datetime-local'/>
                    <FormErrorMessage>{formik.errors.dateandtime}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.textarea && formik.touched.textarea}>
                    <FormLabel color='#5C5858'>Special Request?</FormLabel>
                    <Textarea {...formik.getFieldProps('textarea')} size='lg' placeholder='Anything'/>
                    <FormErrorMessage>{formik.errors.textarea}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
        </Flex>
        </Box>
    )
}

export default Reservation;
