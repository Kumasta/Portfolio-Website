import { Box, Heading, VStack, Text } from "@chakra-ui/react"
import React from "react"
import Roll from 'react-reveal/Roll';

const Card = ({ symb, subColor }) => {

    return (
        <Roll bottom cascade>
            <Box w={{ base: '110px', md: '180px' }} p={4}>
                <VStack w={'full'} h={'full'}>
                    <Heading h={'full'} color={subColor} size={'4xl'}><symb.icon /></Heading>
                    <Text fontSize={{ base: 'lg', lg: '2xl', md: 'xl', sm: 'lg' }}>{symb.name}</Text>
                </VStack>
            </Box>
        </Roll>
    )
}

export default Card