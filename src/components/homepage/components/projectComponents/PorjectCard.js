import { HStack, Img, VStack, useColorModeValue, Heading, Text, Tag, Button, Link } from "@chakra-ui/react"
import Fade from 'react-reveal/Fade';
import { BiLinkExternal } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'
import React from "react"

const ProjectCard = ({ project, subColor }) => {
    const hoverColor = useColorModeValue('#4299E1', '#9DECF9')
    const activeColor = useColorModeValue('#3182CE', '#76E4F7')
    const buttonTextColor = useColorModeValue('white', 'black')
    const sectionBgColor = useColorModeValue('#f5f5f5', '#323a4d')
    return (
        <Fade cascade>
            <HStack w={'full'} justifyContent={'space-between'} flexDirection={{ base: 'column', xl: 'row', lg: 'row', md: 'column', sm: 'column' }} px={{ base: 4, xl: 80, lg: 20, md: 10, sm: 4 }} py={20} bgColor={sectionBgColor}>
                <VStack w={{ base: '100%' }} h={'full'} alignItems={{ base: 'center', md: 'flex-start' }} spacing={4} m={4} >
                    <Heading>{project.name}</Heading>
                    <Heading size={'md'}>{project.type}</Heading>
                    <Text px={2} fontSize={{ base: 'lg', lg: 'xl', md: 'lg', sm: 'md' }} textAlign={'justify'}>{project.description}</Text>
                    <Tag variant={'solid'} colorScheme={'cyan'}>{project.groupSize} | {project.proejctLength}</Tag>
                    <HStack>
                        <Link href={project.link} isExternal>
                            <Button w={28} color={buttonTextColor} bgColor={subColor} _hover={{ bgColor: hoverColor, scale: '120%' }} _active={{ bgColor: activeColor }}>Site Link<BiLinkExternal /></Button>
                        </Link>
                        <Link href={project.gitLink} isExternal>
                            <Button w={28} color={buttonTextColor} bgColor={subColor} _hover={{ bgColor: hoverColor, scale: '120%' }} _active={{ bgColor: activeColor }}>Git Page <SiGithub /></Button>
                        </Link>
                    </HStack>
                </VStack>
                <VStack w={{ base: '100%' }} mx={4}>
                    <Img borderRadius={'30px'} border={`4px solid ${subColor}`} src={project.gif} alt={project.name} />
                </VStack>
            </HStack>
        </Fade>
    )
}


export default ProjectCard