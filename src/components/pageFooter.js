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
    backgroundColor="blackAlpha.500"
    minHeight="300px"
    pt="4rem"
    pb="4rem"
  >
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={20}
      maxWidth="700px"
      ml="auto"
      mr="auto"
    >
      <Flex flexDirection="column">
        <Heading as="h2" size="lg">
          Contáctanos
        </Heading>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input backgroundColor="whiteAlpha.900" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input backgroundColor="whiteAlpha.900" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Mensaje</FormLabel>
          <FormErrorMessage>Error message</FormErrorMessage>
          <Textarea backgroundColor="whiteAlpha.900" />
        </FormControl>
        <Button variant="solid" size="md" width="fit-content" ml="auto">
          Enviar
        </Button>
      </Flex>
      <Flex flexDirection="column">
        <Heading size="lg">¿Dónde estamos?</Heading>
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
