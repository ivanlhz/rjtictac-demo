import React from "react"
import {
  Heading,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  FormLabel,
  Textarea,
  Flex,
  VisuallyHidden,
  Box
} from "@chakra-ui/react"

const ContactForm = () => {
  return (
    <>
      <Heading as="h2" size="lg" color="gray.100">
        Contáctanos
      </Heading>
      <form
        name="rjtictac-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="rjtictac-contact" />
        <VisuallyHidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </VisuallyHidden>
        <FormControl>
          <Input
            name="name"
            isRequired
            variant="flushed"
            placeholder="Nombre"
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl mb="1rem">
          <Input
            name="email"
            isRequired
            variant="flushed"
            placeholder="Email"
            type="email"
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Mensaje</FormLabel>
          <FormErrorMessage>Error message</FormErrorMessage>
          <Textarea
            name="message"
            isRequired
            backgroundColor="whiteAlpha.300"
            color="gray.100"
            minLength="50"
          />
        </FormControl>
        <Flex>
          <Button
            variant="gosh"
            size="md"
            width="fit-content"
            ml="auto"
            type="submit"
            _hover={{ color: "orange.500", fontWeight: "bold" }}
          >
            Enviar
          </Button>
        </Flex>
      </form>
    </>
  )
}

export default ContactForm
