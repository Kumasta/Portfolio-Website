import { Flex } from "@chakra-ui/react"
import React from "react"
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiSass, SiBootstrap, SiMongodb, SiExpress, SiPython, SiInsomnia, SiDjango, SiPostgresql, SiHeroku, SiNetlify, SiGithub, SiYarn, SiNpm } from 'react-icons/si'

import Card from "./Card"

const SkillsCards = ({ subColor }) => {
    const icons = [
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiExpress, name: 'Express' },
        { icon: SiReact, name: 'React' },
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiHtml5, name: 'HTML5' },
        { icon: SiCss3, name: 'CSS' },
        { icon: SiSass, name: 'SASS' },
        { icon: SiBootstrap, name: 'Bootstrap' },
        { icon: SiPython, name: 'Python' },
        { icon: SiInsomnia, name: 'Insomnia' },
        { icon: SiDjango, name: 'Django' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: SiHeroku, name: 'Heroku' },
        { icon: SiNetlify, name: 'Netlify' },
        { icon: SiGithub, name: 'Github' },
        { icon: SiYarn, name: 'Yarn' },
        { icon: SiNpm, name: 'NPM' }
    ]

    return (
        <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
            {icons.map((symb, i) => {
                return (

                    <Card key={i} symb={symb} subColor={subColor} />

                )
            })}

        </Flex>
    )
}

export default SkillsCards