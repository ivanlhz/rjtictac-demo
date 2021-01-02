import React from "react"
import { Flex, Text, Box, Image } from "@chakra-ui/react"
import NavMenu from "../components/navMenu"
import PageFooter from "../components/pageFooter"

const App = () => (
  <>
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="blackAlpha.800"
      flexDirection="column"
      height="100vh"
      m={0}
      p={0}
    >
      <NavMenu />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="space-between"
        height="100%"
        maxWidth="700px"
      >
        <Image height="100px" width="600px" ml="auto" mr="auto" />
        <Text color="whiteAlpha.900" fontSize="2xl" textAlign="center">
          Más de 25 años de experiencia especializándonos en servicios técnicos
          de alto nivel. Utilizamos herramientas de última generación que
          garantizan la máxima calidad en nuestros servicios.
        </Text>
      </Box>
    </Flex>
    <PageFooter />
  </>
)

export default App

