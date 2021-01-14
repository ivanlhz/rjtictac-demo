import React from "react"
import { Flex, Text } from "@chakra-ui/react"

const NavMenu = ({ onContactClick, onBlogClick }) => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="flex-end"
      textAlign="center"
      color="blackAlpha.500"
      pl="1rem"
      pr="1rem"
      width="100%"
      heigth="4.5rem"
      position="fixed"
    >
      <Flex alignItems="stretch" p="1rem">
        <Text mr="1rem" color="gray.300" _hover={{ color: "orange.300" }}>
          <button onClick={onBlogClick}>ARTÍCULOS</button>
        </Text>
        <Text color="gray.300" _hover={{ color: "orange.300" }}>
          <button onClick={onContactClick}>CONTACTO</button>
        </Text>
      </Flex>
    </Flex>
  )
}

export default NavMenu
