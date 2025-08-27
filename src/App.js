import React from "react"
import NavBar from "./components/navbar/Navbar"
import { BrowserRouter } from 'react-router-dom'
import { useColorModeValue } from "@chakra-ui/react"

//Components
import Homepage from "./components/homepage/Homepage"

function App() {
    const subColor = useColorModeValue('#2B6CB0', '#0BC5EA')
    return (
        <BrowserRouter>
            <NavBar subColor={subColor} />
            <Homepage subColor={subColor} />
        </BrowserRouter>
    )
}

export default App;
