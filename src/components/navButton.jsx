import React from "react"
import { Button } from "@chakra-ui/react"

const NavButton = ({ children, onClick, ...props }) => (
  <Button
    borderRadius="0"
    py={{ base: 3, md: 0 }}
    px={2}
    color="white"
    w={{ base: "full", md: "fit-content" }}
    cursor="pointer"
    _hover={{
      color: { base: "black", md: "orange.300" },
      bg: { base: "orange.400", md: "transparent" },
    }}
    {...props}
    variant="gosht"
    w={{ base: "full", md: "fit-content" }}
    onClick={onClick}
  >
    {children}
  </Button>
)

export default NavButton
