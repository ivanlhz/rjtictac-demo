import React from 'react'
import { chakra } from "@chakra-ui/react"
import { Link } from "gatsby"

const CLink = chakra(Link)

const NavLink = ({ children, ...props }) => (
  <CLink px={2} color="white" _hover={{ color: "orange.300" }} {...props}>
    {children}
  </CLink>
)

export default NavLink
