import React from "react"
import { Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { GiCookingPot } from 'react-icons/gi'
import { MdOutlinePodcasts } from 'react-icons/md'
import { IoLogoGameControllerB } from 'react-icons/io'
import { FaYoutube } from 'react-icons/fa'

import ScrollDown from "../../tools/ScrollDown"
import InterestCard from "./InterestComponents/InterestCard"

const Interests = ({ subColor }) => {

    const interests = [
        {
            name: 'Food & Cooking',
            icon: GiCookingPot,
            // summary: 'I have always been fond of cooking since I was very young and it has now become a pastime I enjoy a lot especially when I have time to go all out on a big cooking project. My old staple dish for many years was pasta (cooked many times during university of course), but through self teaching and many youtube videos I have branched out into other cuisines.',
            sections: [
                {
                    pic: 'https://res.cloudinary.com/dv2dfzekf/image/upload/v1649091949/wx_camera_1588261855562_g4oym8.jpg',
                    text: 'I have been fond of cooking since I was very young and it has now become a pastime I enjoy a lot, especially when I have time to go all out on a big cooking project. My old staple dish for many years was pasta (honed during university) but, through self teaching and many YouTube videos, I have branched out into other cuisines.'
                },
                {
                    pic: 'https://res.cloudinary.com/dv2dfzekf/image/upload/v1649091948/IMG_20210123_171859_aydztc.jpg',
                    text: 'I was a bit late to the sour dough bread making phase many people went through during the pandemic, but I caught up with the trends! I would typically bake a loaf a week, which led me down a path of cakes and other baked goods. It all tasted great, but was not the best for my waistline.'
                },
                {
                    pic: 'https://res.cloudinary.com/dv2dfzekf/image/upload/v1649091949/IMG_20210104_154025_de45ej.jpg',
                    text: 'I mostly learn about cooking from YouTube nowadays and, one day, I discovered how simple it was to make homemade pickles. These are now a staple in my fridge to add that extra kick of tangy sourness to nearly everything! I needed to slow down the production as I kept filling up the fridge with jars.'
                },
                {
                    pic: 'https://res.cloudinary.com/dv2dfzekf/image/upload/v1649091949/IMG_20210811_192824_ler3ox.jpg',
                    text: 'When I have the time, I like to invest it in a big cooking project. Things like pizzas made from sourdough are a favourite in our house. I have also attempted to make cubanos from the movie \'Chef\' (including my own home baked bread) and marinated whole chickens.'
                },
            ],
            // extra: []
        },
        {
            name: 'Computer Games',
            icon: IoLogoGameControllerB,
            summary: 'Games have always been a favourite pastime of mine. They became especially important to me since moving to China and during the pandemic as it allowed me to connect with friends who were far away.',
            sections: [
                {
                    pic: 'https://i.insider.com/5cdd9efd021b4c04782f9be3?width=913&format=jpeg',
                    text: 'Since I was young, I have always been a Nintendo fan. I have owned nearly all of their systems since the SNES. I spent a lot of my childhood playing games with my brother at home and, when going to school on the bus, playing Mario Kart DS with a bunch of friends. Good times!'
                },
                {
                    pic: 'https://res.cloudinary.com/dv2dfzekf/image/upload/v1649075368/IMG-20200922-WA0000_ybayzd.jpg',
                    text: 'Apart from Nintendo systems I did own an Xbox 360, but in recent years I have more or less fully adopted PC gaming. I even had a desktop built while I lived in China and managed to obtain a Nvidia RTX 3080 before they became hard to get. My PC has travelled around the world with me to where I am now in the British Isles.'
                },
            ]
        },
        {
            name: 'Podcasts',
            icon: MdOutlinePodcasts,
            summary: 'I got into Podcasts as another way to connect with my partner when we were long distance. Soon after, they become a favourite way to pass time during my long commutes. Below is a list of some of my favourite regular pods, but I am always looking for more.',
            extra: [
                'Serial',
                '99% Invisible',
                'Criminal',
                'The Alarmist',
                'Matt And Mattingly\'s Ice Cream Social',
                'The Piff Pod'
            ]
        },
        {
            name: 'YouTube',
            icon: FaYoutube,
            summary: 'I\'ve been an avid consumer of YouTube content since the early days of the platform, so much so that nowadays that I don\'t watch "regular" TV shows anymore. I also find it to be a great learning platform for many of my interests such as cooking, teaching and, more recently, software engineering. Below is a list of some of my favourite channels.',
            extra: [
                'Mark Rober',
                'Tom Scott',
                'Johnny Harris',
                'TLDR News',
                'Legal Eagle',
                'Sorted Food',
                'Shaun',
                'vlogbrothers',
                'Extra Credits',
                'Cinema Wins',
                'J. Kenji López-Alt',
                'Food Wishes',
                'Adam Ragusea',
                'Folding Ideas',
                'hbomberguy',
                'Game Maker\'s Toolkit',
                'FilmJoy',
                'JunsKitchen'
            ]
        },
    ]





    const sectionBgColor = useColorModeValue('#f5f5f5', '#323a4d')
    return (
        <VStack w={'full'} alignContent={'flex-end'} spacing={16} id={'interests'} py={40} bgColor={sectionBgColor} px={{ base: 4, xl: 80, lg: 20, md: 10, sm: 4 }}>
            <Heading w={'full'} textAlign={{ base: 'center', lg: 'left' }} mb={8} size={'2xl'}>Interests</Heading>
            <VStack w={'full'} spacing={10}>
                {interests?.map((card, i) => {
                    return (
                        <InterestCard key={i} card={card} subColor={subColor} />
                    )
                })}
            </VStack>
            <ScrollDown target={'contact'} />
        </VStack>
    )
}

export default Interests