import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"
import NavLink from "./navLink"
import NavButton from "./navButton"

const NavMenu = ({ onContactClick, onBlogClick, ...props }) => {
  const [show, setShow] = React.useState(false)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="none"
      color="white"
      w="full"
      position="fixed"
      bg={{ base: "gray.900", md: "transparent" }}
      boxShadow={{ base: "0 10px 13px -7px #000", md: "none" }}
      top="0"
      {...props}
    >
      <Flex
        align="center"
        padding="1.5rem"
        display={{ base: "block", md: "none" }}
      >
        <Heading as="h1" color="white" size="lg" letterSpacing={"-.1rem"}>
          <Link to="/">RJ Tic-Tac</Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
        cursor="pointer"
        padding="1.5rem"
      >
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

      <Box
        display={{ base: show ? "flex" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        ml="auto"
        bg={{ base: "gray.800", md: "transparent" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <NavLink display={{ base: "none", md: "block" }} to="/">
          HOME
        </NavLink>
        <NavButton onClick={onBlogClick}>ARTÍCULOS</NavButton>
        <NavButton onClick={onContactClick}>CONTACTO</NavButton>
      </Box>
    </Flex>
  )
}

export default NavMenu
