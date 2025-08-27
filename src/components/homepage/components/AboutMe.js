import React from "react"
import { Heading, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { GiTeacher, GiLaptop, GiJourney } from 'react-icons/gi'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

//Components
import ScrollDown from "../../tools/ScrollDown"

const AboutMe = ({ subColor }) => {
    const sectionBgColor = useColorModeValue('#f5f5f5', '#323a4d')
    const aboutText = [
        { icon: GiTeacher, text: 'After working for several years as an English teacher and centre manager in China, I gained a deep passion for learning and always strove to improve on past achievements and pass on my knowledge to help elevate others.' },
        { icon: GiLaptop, text: 'One aspect of this role I thoroughly enjoyed was learning new technical systems, which I would then introduce and implement in my centre. After ending my time abroad, I decided to switch paths and move into software development, which is more aligned with my personal hobbies and interests in computers and technology as well as my love of problem solving.' },
        { icon: GiJourney, text: 'I started my journey into software engineering when I joined an intensive course at General Assembly UK. I am seeking a workplace that can challenge me at my current skill level and offer opportunities to learn and grow as a developer. I bring with me a learning and growth mindset, and a desire to deliver consistent quality work.' }

    ]

    return (
        <VStack w={'full'} alignContent={'flex-end'} spacing={16} id={'about-me'} py={40} bgColor={sectionBgColor} px={{ xl: 80, lg: 64, md: 20, sm: 4 }}>
            <Heading w={'full'} textAlign={{ base: 'center', lg: 'left' }} mb={8} size={'2xl'}>About Me</Heading>
            <VStack spacing={10}>
                {aboutText.map((section, i) => {
                    return (
                        <HStack key={i} flexDirection={{ base: 'column', lg: 'row' }} w={'full'}>
                            <Flip bottom>
                                <Heading color={subColor} size={'3xl'} mr={4} mb={{ base: 6, lg: 4, md: 0 }}><section.icon /></Heading>
                            </Flip>
                            <Fade cascade>
                                <Text fontSize={{ base: 'lg', xl: '2xl', lg: 'xl', md: 'lg', sm: 'lg' }} textAlign={{ base: 'left', md: 'justify' }}>
                                    {section.text}
                                </Text>
                            </Fade>
                        </HStack>
                    )
                })}

            </VStack>
            <ScrollDown target={'skills'} />
        </VStack>
    )
}

export default AboutMe

