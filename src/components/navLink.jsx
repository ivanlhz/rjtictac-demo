import React from "react"
import { Button, chakra } from "@chakra-ui/react"
import { Link } from "gatsby"

const CLink = chakra(Link)

const NavLink = ({ children, onClick, ...props }) => (
  <CLink
    color="white"
    w={{ base: "full", md: "fit-content" }}
    cursor="pointer"
    _hover={{
      color: { base: "black", md: "orange.300" },
      bg: { base: "orange.400", md: "transparent" },
    }}
    {...props}
  >
    <Button
      variant="gosht"
      w={{ base: "full", md: "fit-content" }}
      onClick={onClick}
    >
      {children}
    </Button>
  </CLink>
)

export default NavLink
