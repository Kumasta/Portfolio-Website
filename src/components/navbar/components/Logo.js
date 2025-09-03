import React from "react"
import {
  Image, HStack,
  // Text
} from "@chakra-ui/react"
import DarkModeToggle from "./DarkModeToggle"

import icon from '../../../assets/MKDevIcon.png'

export default function Logo(props) {


  const componentDidMount = () => {
    window.scrollTo({ top: 10, left: 10, behavior: 'smooth' })
  }

  return (
    <HStack {...props} flex={1} justifyContent={'space-between'}>
      <Image alt="home icon" src={icon} h={14} cursor={'pointer'} _hover={{ textDecoration: 'undeline' }} onClick={componentDidMount} borderRadius={2} />
      {/* <Text fontSize="lg" fontWeight="bold" cursor={'pointer'} _hover={{ textDecoration: 'undeline' }} onClick={componentDidMount}>
        MK_Dev
      </Text> */}
      <DarkModeToggle />
    </HStack>
  )
}
