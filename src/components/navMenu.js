import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"
import NavLink from "./navLink"
import NavButton from "./navButton"

const NavMenu = ({ invertStyle, onContactClick, onBlogClick, ...props }) => {
  const [show, setShow] = React.useState(false)
  return (
    <Flex
      as="nav"
      justify="space-between"
      color="white"
      w="full"
      position="sticky"
      top="0"
      zIndex="1"
      marginTop="-72px"
      bg={{ base: "gray.900", md: invertStyle ? "gray.900" : "transparent" }}
      boxShadow={{
        base: "0 10px 13px -7px #000",
        md: invertStyle ? "0 10px 13px -7px #000" : "none",
      }}
      {...props}
    >
      <Flex
        display={{ base: "inherit", md: "none" }}
        p="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box align="center">
          <Heading as="h1" color="white" size="lg">
            <Link to="/">RJ Tic-Tac</Link>
          </Heading>
        </Box>

        <Box onClick={() => setShow(!show)} cursor="pointer">
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Flex>
      <Box
        display={{ base: show ? "flex" : "none", md: "flex" }}
        width="full"
        alignItems="center"
        bg={{ base: "gray.800", md: "transparent" }}
        flexDirection={{ base: "column", md: "row" }}
        p={{ base: "none", md: "1rem 2rem" }}
      >
        <NavLink display={{ base: "none", md: "block" }} to="/">
          HOME
        </NavLink>
        <NavButton
          ml={["none", "auto"]}
          onClick={() => {
            setShow(false)
            onBlogClick()
          }}
        >
          ARTÍCULOS
        </NavButton>
        <NavButton
          onClick={() => {
            setShow(false)
            onContactClick()
          }}
        >
          CONTACTO
        </NavButton>
      </Box>
    </Flex>
  )
}

export default NavMenu
