import React from "react"
import { Box, Divider, Heading, HStack, VStack } from "@chakra-ui/react"

//Components
import ScrollDown from "../../tools/ScrollDown"

const HeadTitle = () => {

    return (
        <Box mt={{ base: -16, md: 10 }} px={{ base: 4, md: 60 }}>
            <HStack my={6}>
                <Heading size={'4xl'}>
                    Mayur Kumar Developer
                </Heading>
                <Divider />
            </HStack>
            <Heading mt={2}>Junior Full Stack Software Developer</Heading>
            <VStack>
                <ScrollDown target={'about-me'} />
            </VStack>
        </Box>
    )
}

export default HeadTitle