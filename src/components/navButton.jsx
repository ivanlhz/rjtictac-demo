import React from "react"
import { Button } from "@chakra-ui/react"

const NavButton = ({ children, onClick, active, ...props }) => (
  <Button
    borderRadius="0"
    py={{ base: 3, md: 0 }}
    px={2}
    color="white"
    borderBottom={active && "3px solid"}
    borderColor={active && "orange.400"}
    w={{ base: "full", md: "fit-content" }}
    cursor="pointer"
    _hover={{
      color: { base: "black", md: "orange.400" },
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
