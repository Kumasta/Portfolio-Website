import React from "react"
import { Box, Stack, Text } from '@chakra-ui/react'
import { HashLink } from "react-router-hash-link"

const MenuLinks = ({ isOpen, mdDisplay }) => {

    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: mdDisplay }}
            flexBasis={{ base: '100%', md: 'auto' }}
        >
            <Stack
                spacing={[2, 8, 8, 8]}
                align='center'
                justify={['center', 'flex-start', 'flex-end', 'flex-end']}
                direction='row'
                pt={[4, 4, 0, 0]}
            >
                <HashLink smooth to={'/#about-me'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>About Me</Text></HashLink>
                <HashLink smooth to={'/#skills'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Skills</Text></HashLink>
                <HashLink smooth to={'/#projects'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Projects</Text></HashLink>
                <HashLink smooth to={'/#interests'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Interests</Text></HashLink>
                <HashLink smooth to={'/#contact'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Contact</Text></HashLink>

            </Stack>
        </Box>
    )
}

export default MenuLinks