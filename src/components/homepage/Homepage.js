import { Stack } from "@chakra-ui/react"
import React from "react"
// import { HashLink } from 'react-router-hash-link';

//component
import HeadTitle from "./components/HeadTitle"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Interests from "./components/Interests"
import Contact from "./components/Contact"

const Homepage = ({ subColor }) => {

    return (
        <Stack spacing={'65vh'} my={80}>
            <HeadTitle />
            <AboutMe subColor={subColor} />
            <Skills subColor={subColor} />
            <Projects subColor={subColor}/>
            <Interests subColor={subColor}/>
            <Contact subColor={subColor} />
        </Stack>
    )
}

export default Homepage