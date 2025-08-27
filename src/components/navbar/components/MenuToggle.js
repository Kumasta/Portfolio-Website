import React from 'react'
import { Box } from '@chakra-ui/react'
import { FaGripLines, FaGripLinesVertical } from 'react-icons/fa'

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <FaGripLinesVertical /> : <FaGripLines />}
		</Box>
	)
}

export default MenuToggle
