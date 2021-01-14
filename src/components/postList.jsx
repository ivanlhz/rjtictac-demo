import React from "react"
import { Flex, Button, Image, Heading, Text, Grid } from "@chakra-ui/react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const PostList = () => {
  return (
    <Flex
      backgroundColor="gray.100"
      minH="100vh"
      p="2rem"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading mb="3rem">Artículos destacados</Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px,1fr))"
        width={{ base: "100%", md: "768px" }}
        gridGap="18px"
        ml="auto"
        mr="auto"
      >
        <StaticQuery
          query={postQuery}
          render={data => {
            const posts = data.allContentfulPost.edges
            return posts.map(
              ({
                node: { id, slug, title, descripcionCorta, imagenPrincipal },
              }) => (
                <BackgroundImage key={id} fluid={imagenPrincipal.fluid}>
                  <Flex
                    color="white"
                    flexDirection="column"
                    key={id}
                    padding="2rem"
                  >
                    <Heading mt="200px" color="orange.500" fontSize="1.5rem">
                      {title}
                    </Heading>
                    <Text>{descripcionCorta}</Text>
                    <Button
                      color="gray.500"
                      width="fit-content"
                      mt="2rem"
                      variant="link"
                    >
                      Leer más
                    </Button>
                  </Flex>
                </BackgroundImage>
              )
            )
          }}
        />
      </Grid>
    </Flex>
  )
}

export const postQuery = graphql`
  {
    allContentfulPost {
      edges {
        node {
          slug
          title
          tags
          id
          descripcionCorta
          imagenPrincipal {
            fluid(maxWidth: 768) {
              src
              sizes
            }
          }
        }
      }
    }
  }
`

export default PostList
