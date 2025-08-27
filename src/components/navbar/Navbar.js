import React from "react"
import { Box, Flex, Text, Stack } from '@chakra-ui/react'
import { HashLink } from "react-router-hash-link"

//Components
// import DarkModeToggle from "./components/DarkModeToggle"
// import MenuLinks from "./components/MenuLink"
// import MenuToggle from "./components/MenuToggle"
import Logo from './components/Logo'

const NavBar = ({ props, subColor }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props} subColor={subColor}>
            <Logo
                w="100px"
            // color={["white", "white", "primary.500", "primary.500"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle} ml={4}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};


const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                ml={4}
            >
                <HashLink smooth to={'/#about-me'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>About Me</Text></HashLink>
                <HashLink smooth to={'/#skills'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Skills</Text></HashLink>
                <HashLink smooth to={'/#projects'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Projects</Text></HashLink>
                <HashLink smooth to={'/#interests'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Interests</Text></HashLink>
                <HashLink smooth to={'/#contact'}><Text fontWeight={'black'} _hover={{ textDecoration: 'underline' }} display='block'>Contact</Text></HashLink>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, subColor, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={[subColor, subColor, subColor, subColor]}
            {...props}
            position={'fixed'}
            top={0}
            zIndex={100}
        >
            {children}
        </Flex>
    );
};





// const [isOpen, setIsOpen] = React.useState(false)
// const toggle = () => setIsOpen(!isOpen)

// const componentDidMount = () => {
//     window.scrollTo(0, 0)
// }

// return (
//     <VStack style={{ backgroundColor: subColor }} h={28} position={'fixed'} w={'full'} top={0} zIndex={100} spacing={0}>
//         <HStack w={'full'} h={'full'} justifyContent={'space-around'}>
//             <Heading onClick={componentDidMount} cursor={'pointer'} _hover={{ textDecoration: 'undeline' }}>MK_Dev</Heading>
//             <HStack >
//                 <DarkModeToggle />
//                 <MenuToggle toggle={toggle} isOpen={isOpen} />
//                 <MenuLinks mdDisplay='block' />
//             </HStack>
//         </HStack>
//         <MenuLinks
//             mdDisplay='none'
//             isOpen={isOpen}
//         />
//     </VStack>
// )
// }


export default NavBar