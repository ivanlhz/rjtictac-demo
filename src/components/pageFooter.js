import React from "react"
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Text,
  Button,
  Image,
  Box,
  Grid,
} from "@chakra-ui/react"

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
      maxW={{base:"300px", md:"700px"}}
      ml="auto"
      mr="auto"
      gridAutoFlow="row dense"
      p={{base: "2rem", md: "0"}}
    >
      <Flex flexDirection="column">
        <Heading as="h2" size="lg" color="gray.100">
          Contáctanos
        </Heading>
        <FormControl>
          <Input isRequired variant="flushed" placeholder="Nombre" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl mb="1rem">
          <Input isRequired variant="flushed" placeholder="Email" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Mensaje</FormLabel>
          <FormErrorMessage>Error message</FormErrorMessage>
          <Textarea isRequired backgroundColor="whiteAlpha.300" color="gray.100" />
        </FormControl>
        <Button variant="gosh" size="md" width="fit-content" ml="auto">
          Enviar
        </Button>
      </Flex>
      <Flex flexDirection="column">
        <Heading size="lg" color="gray.100">¿Dónde estamos?</Heading>
        <Flex flexDirection="column" mt="1rem">
          <Text pb=".5rem">Calle San Clemente, 8.</Text>
          <Text pb=".5rem">Santa Cruz de Tenerife</Text>
          <Text fontWeight="bold">Teléfono:</Text>
          <Text pb=".5rem">922-242-285</Text>
          <Text fontWeight="bold">Abierto de Lunes a Viernes</Text>
          <Text>10:00 - 13:00 y de 17:00 - 20:00</Text>
        </Flex>
        <Image height="200px" width="300px" mt="1rem" />
      </Flex>
    </Grid>
  </Box>
)

export default PageFooter
