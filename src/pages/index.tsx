import React, { useEffect } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import NavMenu from "../components/navMenu"
import PageFooter from "../components/pageFooter"
import PostList from "../components/postList"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import ServicioTecnico from "../components/servicioTecnico"

const App = () => {
  const contactRef = React.useRef()
  const postsRef = React.useRef()
  const tecnicalServiceRef = React.useRef()
  const heroRef = React.useRef()
  const heroObserver = React.useRef() //TODO: Refactor
  const sectionPostsObserver = React.useRef() //TODO: Refactor
  const tecnicalServiceObserver = React.useRef() //TODO: Refactor
  const contactObserver = React.useRef() //TODO: Refactor
  const [activeLink, setActiveLink] = React.useState("") // TODO: Refactor
  const [invertNavMenuStyle, setInvertNavMenuStyle] = React.useState(false)

  const images = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "rjtictac-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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

  useEffect(() => {
    heroObserver.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActiveLink("")
          setInvertNavMenuStyle(false)
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    )

    heroObserver.current.observe(heroRef.current)
  }, [])

  useEffect(() => {
    // when the postSection enter into the view
    sectionPostsObserver.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActiveLink("article")
          setInvertNavMenuStyle(true)
        } else if (activeLink === "article") {
          setActiveLink("")
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    )

    sectionPostsObserver.current.observe(postsRef.current)
  }, [])

  useEffect(() => {
    tecnicalServiceObserver.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActiveLink("tecnicalService")
          setInvertNavMenuStyle(true)
        } else if (activeLink === "tecnicalService") {
          setActiveLink("")
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    )

    tecnicalServiceObserver.current.observe(tecnicalServiceRef.current)
  }, [])

  useEffect(() => {
    contactObserver.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActiveLink("contact")
          setInvertNavMenuStyle(true)
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    )

    contactObserver.current.observe(contactRef.current)
  }, [])

  // TODO: refactor
  function scrollTo(myRef, callback = () => null) {
    myRef.current.scrollIntoView({ behavior: "smooth" })
    if (callback) callback()
  }

  return (
    <>
      <NavMenu
        invertStyle={invertNavMenuStyle}
        active={activeLink}
        onContactClick={() => scrollTo(contactRef)}
        onBlogClick={() => scrollTo(postsRef)}
        onTecnicalServiceClick={() => scrollTo(tecnicalServiceRef)}
      />
      <BackgroundImage
        fluid={images.desktop.childImageSharp.fluid}
        backgroundColor={`#333`}
      >
        <Flex
          ref={heroRef}
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor="blackAlpha.900"
          flexDirection="column"
          height="100vh"
          m={0}
          p="0 2rem"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="space-between"
            height="100%"
            maxW="700px"
          >
            <Img
              fluid={images.logo.childImageSharp.fluid}
              alt="rjtictac logo"
            />
            <Text
              color="whiteAlpha.900"
              fontSize="2xl"
              textAlign="center"
              mt="2rem"
            >
              Más de 25 años de experiencia especializándonos en servicios
              técnicos de alto nivel. Utilizamos herramientas de última
              generación que garantizan la máxima calidad en nuestros servicios.
            </Text>
          </Box>
        </Flex>
      </BackgroundImage>
      <Box ref={postsRef}>
        <PostList />
      </Box>
      <Flex ref={tecnicalServiceRef} minH="100vh">
        <ServicioTecnico />
      </Flex>
      <Box ref={contactRef}>
        <PageFooter />
      </Box>
    </>
  )
}

export default App
