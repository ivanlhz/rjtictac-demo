import React from "react"
import { Flex, Heading, Text, AspectRatio } from "@chakra-ui/react"

const DondeEstamos = () => (
  <>
    <Heading size="lg" color="gray.100">
      ¿Dónde estamos?
    </Heading>
    <Flex flexDirection="column" mt="1rem">
      <Text pb=".5rem">Calle San Clemente, 8.</Text>
      <Text pb=".5rem">Santa Cruz de Tenerife</Text>
      <Text fontWeight="bold">Teléfono:</Text>
      <Text pb=".5rem">922-242-285</Text>
      <Text fontWeight="bold">Abierto de Lunes a Viernes</Text>
      <Text>10:00 - 13:00 y de 17:00 - 20:00</Text>
    </Flex>
  </>
)

export default DondeEstamos
