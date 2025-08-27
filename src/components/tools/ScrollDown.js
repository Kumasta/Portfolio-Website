import React from "react"
import { HashLink } from 'react-router-hash-link';
import { ImCircleDown } from 'react-icons/im'
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { Tooltip } from '@chakra-ui/react'

const ScrollDown = ({ target }) => {
    const subColor = useColorModeValue('#2B6CB0', '#0BC5EA')
    const hoverColor = useColorModeValue('#4299E1', '#9DECF9')
    const activeColor = useColorModeValue('#3182CE', '#76E4F7')
    return (
        <Box mt={40}>
            <Tooltip label={target.toUpperCase()}>
                <HashLink smooth to={`/#${target}`}><Heading color={subColor} _hover={{ color: hoverColor, scale: '120%' }} _active={{ color: activeColor }}><ImCircleDown /></Heading></HashLink>
            </Tooltip>
        </Box>
    )
}

export default ScrollDown