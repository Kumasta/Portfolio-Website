import React from "react"
import { Button, Collapse, VStack, Text, Image, HStack, Heading, useDisclosure, Divider, useColorModeValue, AspectRatio, UnorderedList, ListItem } from '@chakra-ui/react'
// import { GiCookingPot } from 'react-icons/gi'
// import { MdOutlinePodcasts } from 'react-icons/md'
// import { IoGameController } from 'react-icons/io'
// import { FaYoutube } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { HashLink } from "react-router-hash-link"


const InterestCard = ({ card, subColor }) => {

    const { isOpen, onToggle } = useDisclosure()
    const hoverColor = useColorModeValue('#4299E1', '#9DECF9')
    const activeColor = useColorModeValue('#3182CE', '#76E4F7')
    const buttonTextColor = useColorModeValue('white', 'black')


    return (
        <VStack w={'full'} flexDirection={isOpen ? 'column' : 'row'} spacing={4} id={card.name.replace(' ', '')}>
            <Fade left cascade>
                <HStack w={'full'} alignItems={'center'}>
                    <HStack w={'205px'}>
                        <Heading color={subColor} size={'xl'}><card.icon /></Heading><Heading size={'md'}>{card.name}</Heading>
                    </HStack>
                    <Button onClick={onToggle} color={buttonTextColor} bgColor={subColor} _hover={{ bgColor: hoverColor, scale: '120%' }} _active={{ bgColor: activeColor }}>{isOpen ? 'Show less' : 'Show more'}</Button>
                </HStack>
            </Fade>
            <Collapse in={isOpen} animateOpacity w={'full'}>
                <VStack spacing={4} w={'full'}>
                    <Text w={'100%'} fontSize={{ base: 'lg', xl: '2xl', lg: 'xl', md: 'lg', sm: 'lg' }} textAlign={{ base: 'left', md: 'justify' }}>
                        {card.summary}
                    </Text>
                    {card.sections?.map((section, i) => {
                        return (
                            <VStack key={i}>
                                <Divider />
                                <HStack flexDirection={i % 2 !== 0 ? { base: 'column', xl: 'row', lg: 'row', md: 'row', sm: 'column' } : { base: 'column', xl: 'row-reverse', lg: 'row-reverse', md: 'row-reverse', sm: 'column' }} spacing={4}>
                                    <AspectRatio minW={'300px'} h={'200px'} ratio={4 / 3}>
                                        <Image src={section.pic} mx={2} boxShadow={'xl'} />
                                    </AspectRatio>
                                    <Text fontSize={{ base: 'lg', xl: '2xl', lg: 'xl', md: 'lg', sm: 'lg' }} textAlign={{ base: 'left', md: 'justify' }}>{section.text}</Text>
                                </HStack>
                            </VStack>
                        )
                    })}
                    <HStack w={'full'}>
                        <UnorderedList w={'full'}>
                            {card.extra?.map((item, i) => {
                                return (
                                    <ListItem fontSize={{ base: 'lg', xl: '2xl', lg: 'xl', md: 'lg', sm: 'lg' }} _hover={{ textDecoration: 'none' }} _active={{ scale: '100%', fontWeight: 'normal' }} key={i}>{item}</ListItem>
                                )
                            })}
                        </UnorderedList>
                    </HStack>
                </VStack>
            </Collapse>
            {isOpen && <HashLink to={`/#${card.name.replace(' ', '')}`} smooth><Button onClick={onToggle} color={buttonTextColor} bgColor={subColor} _hover={{ bgColor: hoverColor, scale: '120%' }} _active={{ bgColor: activeColor }}>{isOpen ? 'Show less' : 'Show more'}</Button></HashLink>}
        </VStack>
    )
}

export default InterestCard
