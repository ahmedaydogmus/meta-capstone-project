import React from 'react'
import {Box, Flex,Grid, Heading, Card, CardBody,Image,Text} from '@chakra-ui/react';
import GrilledFish from '../assets/Grilled_fish.jpg';
import GreekSalad from '../assets/Greek_salad.jpg';
import LemonDessert from '../assets/Lemon_dessert.jpg'
const Menu = () => {
  return(
    <Flex flexDirection='column' p={5}>
        <Heading id='Menu' marginLeft={{base:'5rem'}} marginBottom='3rem' color='#5C5858' size='2xl'>Menu</Heading>
        <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',xl:'repeat(3,1fr)'}} margin='0 4rem' gap={{base:'2rem'}}>
            <Card width='400px' bg='#F8F8FF' borderRadius='2rem' border='1px solid #B6B6B4'>
                <CardBody >
                    <Image width='400px' height='350px' borderRadius='2rem' marginBottom='2rem'  alt='grilled-fish' src={GrilledFish} />
                    <Flex justifyContent='space-between'>
                        <Heading marginBottom='2rem' color='#5C5858' size='lg'>Grilled Fish</Heading>
                        <Heading fontWeight='500' color='#5C5858' fontSize='1.5rem'>$12.00</Heading>
                    </Flex>
                    <Text>The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners. Thinner fillets and steaks are grilled over direct fire.</Text>
                </CardBody>
            </Card >
            <Card width='400px' bg='#F8F8FF' borderRadius='2rem' border='1px solid #B6B6B4'>
                <CardBody>
                    <Image width='400px' height='350px' borderRadius='2rem' marginBottom='2rem'    alt='grilled-fish' src={GreekSalad} />
                    <Flex justifyContent='space-between'>
                        <Heading marginBottom='2rem' color='#5C5858' size='lg'>Greek Salad</Heading>
                        <Heading fontWeight='500' color='#5C5858' fontSize='1.5rem'>$11.00</Heading>
                    </Flex>
                    <Text>Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.</Text>
                </CardBody>
            </Card>
            <Card width='400px' bg='#F8F8FF' borderRadius='2rem' border='1px solid #B6B6B4'>
                <CardBody>
                    <Image  width='400px' height='350px' borderRadius='2rem' marginBottom='2rem'    alt='grilled-fish' src={LemonDessert} />
                    <Flex justifyContent='space-between'>
                        <Heading marginBottom='2rem' color='#5C5858' size='lg'>Lemon Dessert</Heading>
                        <Heading fontWeight='500' color='#5C5858' fontSize='1.5rem'>$9.00</Heading>
                    </Flex>
                    <Text>This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead.</Text>
                </CardBody>
            </Card>

        </Grid>
    </Flex>
)
}

export default Menu
