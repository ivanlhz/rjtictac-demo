import React from "react"
import { Text, Flex } from "@chakra-ui/react"
import NavMenu from "./navMenu"

const Layout = ({ children }) => {
  const contactRef = React.useRef(null)
  function scrollTo(myRef) {
    myRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Flex minW="100wh" flexDirection="column">
      <NavMenu
        onContactClick={() => {}}
        onBlogClick={() => scrollTo(contactRef)}
      />
      <main>{children}</main>
      <div ref={contactRef} />
      <footer>
        <Text p={{ base: "1rem", md: "1rem 3rem" }} fontStyle="italic">
          © {new Date().getFullYear()}, Relojería Joyería TIC - TAC
        </Text>
      </footer>
    </Flex>
  )
}

export default Layout
