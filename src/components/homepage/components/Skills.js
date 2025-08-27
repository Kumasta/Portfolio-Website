import { Box, Heading, VStack } from "@chakra-ui/react"
import React from "react"
import SkillsCards from "./skillsComponents/SkillCards"
import ScrollDown from "../../tools/ScrollDown"

const Skills = ({ subColor }) => {

    return (
        <VStack px={{ xl: 80, lg: 64,  md: 20, sm: 4 }} pt={60}id={'skills'}>
            <Box spacing={16} pt={40}>
                <Heading w={'full'} textAlign={{ base: 'center', lg: 'left' }} mb={8} size={'2xl'} >Technical Skills</Heading>
                <SkillsCards subColor={subColor} />
            </Box>
            <ScrollDown target={'projects'} />
        </VStack>
    )
}

export default Skills