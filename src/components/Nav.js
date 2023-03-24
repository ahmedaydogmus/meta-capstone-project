import React from 'react'
import {MenuList,MenuItem,Menu,MenuButton,Box, Flex, Text, Image, Button} from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const NavLink = ['Home','About','Menu','Reservation']



  return (
      <Flex marginBottom='3%' bg='#F8F8FF' justifyContent='center' alignItems='center' width='100%' p={2}>
        <Text id='Nav' as='a' marginRight='4rem' href='/#Nav'><Image height='4rem' alt='logo' src={logo}/></Text>
        <Flex display={{base:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'}} justifyContent='center' alignItems='center'>
          {NavLink.map((prop) => <Text as='a' margin='0 1rem'fontSize='1.35rem' fontWeight='500' color='#5C5858' href={`#${prop}`} >{prop}</Text> )}
        </Flex>
          <Menu >
            <MenuButton display={{base:'flex',sm:'flex',md:'none',lg:'none',xl:'none'}} cursor='pointer' bg='none' color='#5C5858' border='none' fontSize='1.7rem'>
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuList bg='#F8F8FF' fontSize='1.35rem' border='1px solid black' borderRadius='10%' p={4}>
              {NavLink.map((prop) => <MenuItem as='a' bg='#F8F8FF' color='#5C5858' href={`#${prop}`}>{prop}</MenuItem>)}
            </MenuList>
          </Menu>
      </Flex>
  )
}
export default Nav;
