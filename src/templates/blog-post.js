import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Flex, Image, Heading, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.descripcionCorta} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Flex flexDirection="column" width="100wh">
          <Image
            objectFit="cover"
            maxH="20rem"
            src={post.imagenPrincipal.resolutions.src}
          />
          <Flex
            bg="whiteAlpha.900"
            flexDirection="column"
            p={{ base: "1rem", md: "2rem 3rem" }}
          >
            <Heading mb="1.5rem">{post.title}</Heading>
            <Text textAlign="justify" mb="2rem">
              {renderRichText(post.contenido)}
            </Text>
          </Flex>
        </Flex>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(id: { eq: $id }) {
      title
      tags
      descripcionCorta
      createdAt(formatString: "Do MMMM, YYYY")
      contenido {
        raw
      }
      imagenPrincipal {
        resolutions(width: 2600) {
          width
          height
          src
          srcSet
        }
      }
    }
    previous: contentfulPost(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: contentfulPost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
