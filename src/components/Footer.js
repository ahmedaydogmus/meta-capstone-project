import React from 'react'
import {Box,Flex,Image,Text} from '@chakra-ui/react';
import footerLogo from '../assets/logo_footer.png';

const Footer = () => {
  return (
    <Box marginTop='5rem' p='3rem' bg='#F8F8FF'>
      <Flex justifyContent='space-between'>
        <Image src={footerLogo} alt='footer-logo'/>
        <Flex flexDirection='column'>
          <Box marginBottom='1rem' bg='#1F6357' width={{base:'18rem',lg:'25rem'}} height='0.2rem'/>
          <Text marginLeft='1rem' color='#5C5858' fontSize='xl' >Copyright Little Lemon</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
