import React from "react"
import { Flex, Button, Image, Heading, Text, Grid } from "@chakra-ui/react"

const PostList = () => (
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
      templateColumns="repeat(auto-fill, minmax(200px,1fr))"
      width={{ base: "100%", md: "768px" }}
      gridGap="18px"
      ml="auto"
      mr="auto"
    >
      <Flex flexDirection="column">
        <Image height="100px" width="100%" />
        <Heading fontSize="1.5rem">Heading title</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam
          optio labore delectus ullam culpa tenetur...
        </Text>
        <Button>Leer más</Button>
      </Flex>
      <Flex flexDirection="column">
        <Image height="100px" width="100%" />
        <Heading fontSize="1.5rem">Heading title</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam
          optio labore delectus ullam culpa tenetur...
        </Text>
        <Button>Leer más</Button>
      </Flex>
      <Flex flexDirection="column">
        <Image height="100px" width="100%" />
        <Heading fontSize="1.5rem">Heading title</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam
          optio labore delectus ullam culpa tenetur...
        </Text>
        <Button>Leer más</Button>
      </Flex>
    </Grid>
  </Flex>
)

export default PostList
