import React from 'react'
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi'
import { Button, useColorMode } from '@chakra-ui/react'

const DarkModeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<header>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <HiOutlineLightBulb/>: <HiLightBulb/>}
				</Button>
			</header>
		</>
	)
}

export default DarkModeToggle
