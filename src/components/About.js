import React from 'react'
import {Flex, Box,HStack,Heading,Text,Image} from '@chakra-ui/react';
import AboutUsPhoto from '../assets/mario_and_adrian.jpg';

const About = () => {
  return (
    <Box bg='#F8F8FF' borderRadius='2rem' border='1px solid #B6B6B4' margin='1rem 5rem' p={5}>
      <Heading id='About' marginBottom='3rem' color='#5C5858' size='2xl'>About Us</Heading>
      <Flex flexDirection={{base:'column',xl:'row'}}>
        <Text marginRight={{xl:'5rem'}} fontSize='lg' marginBottom={{base:'5rem',xl:'0'}} color='#5C5858' fontWeight='500'>
          Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/><br/>
          The chefs draw inspiration from ItSalian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.<br/><br/>
          The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.<br/><br/>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br/><br/>
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.<br/><br/>
          Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.
        </Text>
        <Image width={{base:'100%',lg:'100%',xl:'50%'}} alt='aboutus-photo' src={AboutUsPhoto}/>
      </Flex>
    </Box>
  )
}

export default About
