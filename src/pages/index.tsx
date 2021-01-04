import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import NavMenu from "../components/navMenu"
import PageFooter from "../components/pageFooter"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const App = () => {
  const images = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "rjtictac-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        logo: file(relativePath: { eq: "logo3.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
    }
      }
    `
  )


  return (
    <>
      <BackgroundImage
        fluid={images.desktop.childImageSharp.fluid}
        backgroundColor={`#333`}
      >
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor="blackAlpha.900"
          flexDirection="column"
          height="100vh"
          m={0}
          p="2rem"
        >
          <NavMenu />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="space-between"
            height="100%"
            maxW="700px"
          >
            <Img fluid={images.logo.childImageSharp.fluid} alt="rjtictac logo" />
            <Text color="whiteAlpha.900" fontSize="2xl" textAlign="center" mt="2rem">
              Más de 25 años de experiencia especializándonos en servicios técnicos
              de alto nivel. Utilizamos herramientas de última generación que
              garantizan la máxima calidad en nuestros servicios.
          </Text>
          </Box>
        </Flex>
      </ BackgroundImage>
      <PageFooter />
    </>
  )
}

export default App