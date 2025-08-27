import { List, ListItem, ListIcon, HStack, Img, VStack, Link, Heading } from "@chakra-ui/react"
import React from "react"
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'
import Fade from 'react-reveal/Fade';
import IMG_20220329_211615 from '../../../assets/IMG_20220329_211615.jpg'

const Contact = ({ subColor }) => {

    return (
        <VStack id={'contact'}>
            <Heading mb={8} size={'2xl'}>Contact</Heading>
            <HStack w={'full'} flexDirection={{ base: 'column', md: 'row' }} justifyContent={'center'}>
                <Img maxH={60} m={10} src={IMG_20220329_211615} borderRadius={'full'} />
                <VStack>
                    <List size={20} w={'170px'}>
                        <Fade bottom cascade>
                            <ListItem>
                                <ListIcon as={SiGmail} color={subColor} />
                                <Link href={"mailto: mayurkumardev@googlemail.com"} rel="noreferrer" target={'_blank'}>Email</Link>
                            </ListItem>
                        </Fade>
                        <Fade bottom cascade>
                            <ListItem>
                                <ListIcon as={SiLinkedin} color={subColor} />
                                <Link href={"http://www.linkedin.com/in/mayur-kumar-dev"} rel="noreferrer" target={'_blank'}>LinkedIn </Link>
                            </ListItem>
                        </Fade>
                        <Fade bottom cascade>
                            <ListItem>
                                <ListIcon as={SiGithub} color={subColor} />
                                <Link href={"https://github.com/Kumasta"} rel="noreferrer" target={'_blank'}>Github</Link>
                            </ListItem>
                        </Fade>
                    </List>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Contact