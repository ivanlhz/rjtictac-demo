import React from "react"
import { Flex, Text, chakra } from "@chakra-ui/react"
import NavLink from './navLink'

const NavMenu = ({ onContactClick, onBlogClick }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      color="blackAlpha.500"
      px={5}
      py={4}
      w="100%"
      position="fixed"
    >
      <Flex alignItems="stretch" ml="auto">
        <NavLink to="/">HOME</NavLink>
        <NavLink>
          <button onClick={onBlogClick}>ARTÍCULOS</button>
        </NavLink>
        <NavLink>
          <button onClick={onContactClick}>CONTACTO</button>
        </NavLink>
      </Flex>
    </Flex>
  )
}

export default NavMenu
