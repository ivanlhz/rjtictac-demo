import React from "react"
import { Flex, Button, Image, Heading, Text, Grid } from "@chakra-ui/react"
import { StaticQuery, graphql } from "gatsby"

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
                <Flex flexDirection="column" key={id}>
                  <Image width="100%" src={imagenPrincipal.fixed.src} />
                  <Heading fontSize="1.5rem">{title}</Heading>
                  <Text>{descripcionCorta}</Text>
                  <Button>Leer más</Button>
                </Flex>
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
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

export default PostList
