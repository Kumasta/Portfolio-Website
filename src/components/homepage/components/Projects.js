import { Heading, VStack } from "@chakra-ui/react"
import React from "react"

import ProjectCard from "./projectComponents/PorjectCard"
import ScrollDown from "../../tools/ScrollDown"

import virusGIF from '../../../assets/virus-project.gif'
import ITVDBGIF from '../../../assets/ITVDB-project.gif'
import gemGIF from '../../../assets/gem-project.gif'
import giveawayGIF from '../../../assets/giveaway-project.gif'

const Projects = ({ subColor }) => {

    const projects = [
        {
            name: 'Virus Buster',
            type: 'Browser Game',
            gif: virusGIF,
            link: 'https://kumasta.github.io/SEI-Project-1-Virus-Buster/',
            gitLink: 'https://github.com/Kumasta/SEI-Project-1-Virus-Buster',
            proejctLength: '7 day build',
            groupSize: 'Solo',
            description: 'The first project I completed was a web game built from Vanilla JavaScript, HTML 5 and CSS. The game runs in browser and is a clone of the classic arcade game Space Invaders. It was my first solo project through which I saw how to apply all the basic concepts of JavaScript I had learnt until that point and it gave me a huge confidence boost in my abilities.'
        },
        {
            name: 'ITVDB',
            type: 'React Web Page',
            gif: ITVDBGIF,
            link: 'https://itvdb-sei61.netlify.app/',
            gitLink: 'https://github.com/Kumasta/SEI-Project-2-ITVBD',
            proejctLength: '2 day build',
            groupSize: 'Pair Hackathon',
            description: 'Inspired by IMDB, this was the first project I built with a partner using a TV show API with Axios. I worked on the home page, cards, and showcase page for our main data as well as a lot of the styling using SASS. I learned about using React to create a website from the ground up and how to work on a project with more than one person.'
        },
        {
            name: 'Hidden Gems',
            type: 'MongoDb Full Stack Project',
            gif: gemGIF,
            link: 'https://sei-hidden-gems.herokuapp.com/',
            gitLink: 'https://github.com/Kumasta/SEI-Project-3-Hidden-Gems',
            proejctLength: '10 day build',
            groupSize: 'Group Project',
            description: 'A website for discovering lesser known places in the UK. Working with two others, we built a MongoDB based back-end in JavaScript and a React based front-end. I worked on creating the interactive map with React-Mapbox-gl, profile pages, and forms. This was a project where I learned about creating a database and API endpoints, and the importance of clear planning when working in groups to avoid code conflicts.'
        },
        {
            name: 'Giveaway Bae',
            type: 'Django Full Stack Project',
            gif: giveawayGIF,
            link: 'https://sei-giveaway-site.herokuapp.com/',
            gitLink: 'https://github.com/Kumasta/SEI-Project-4-Mayur',
            proejctLength: '10 day build',
            groupSize: 'Group Project',
            description: 'A full stack project with a back-end database built with Django & Python. I worked on this with one other person. Here, we allowed users to create a watch list of ongoing giveaways that would be collected onto their own page. Knowing JavaScript enabled me to pick up Python very quickly and also built a SQL database with more complex relationships. I made the home, showcase, auth, and search pages.'
        }
    ]

    return (
        <VStack spacing={40} id={'projects'}>
            <Heading mb={8} size={'2xl'}>Projects</Heading>
            {projects.map((project, i) => {
                return (
                    <ProjectCard key={i} project={project} subColor={subColor} />
                )
            })}
            <ScrollDown target={'interests'} />
        </VStack>
    )
}


export default Projects