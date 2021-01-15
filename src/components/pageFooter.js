import React from "react"
import { Flex, Box, Grid } from "@chakra-ui/react"
import DondeEstamos from "./dondeEstamos"
import ContactForm from "./contactForm"

const PageFooter = () => (
  <Box
    width="100%"
    backgroundColor="gray.700"
    minHeight="300px"
    pt="4rem"
    pb="4rem"
    color="gray.300"
  >
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={20}
      maxW={{ base: "300px", md: "700px" }}
      ml="auto"
      mr="auto"
      gridAutoFlow="row dense"
      p={{ base: "1rem", md: "0" }}
    >
      <Flex flexDirection="column">
        <ContactForm />
      </Flex>
      <Flex flexDirection="column">
        <DondeEstamos />
      </Flex>
    </Grid>
  </Box>
)

export default PageFooter
