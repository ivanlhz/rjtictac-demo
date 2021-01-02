import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { Link } from "gatsby"

const NavMenu = () => (
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
      <Text mr="1rem" color="gray.300">
        CONTACTO
      </Text>
      <Text mr="1rem" color="gray.300">
        TALLER
      </Text>
      <Text color="gray.300">
        <Link to="/blog">BLOG</Link>
      </Text>
    </Flex>
  </Flex>
)

export default NavMenu
