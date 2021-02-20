import React from "react"
import { Grid, Box, Flex, Image, Link, Heading } from "@chakra-ui/react"

const links = [
  {
    label: "TagHeuer",
    src: "https://unsplash.it/1242/2400",
    link: "https://www.tagheuer.com/es/es/",
  },
  {
    label: "Dior",
    src: "https://unsplash.it/seed/a/1242/2400",
    link: "https://www.dior.com/es_es",
  },
  {
    label: "Zenith",
    src: "https://unsplash.it/seed/b/1242/2400",
    link: "https://www.zenith-watches.com/es_es",
  },
  {
    label: "Hublot",
    src: "https://unsplash.it/seed/c/1242/2400",
    link: "https://www.hublot.com/es-us",
  },
  {
    label: "Ebel",
    src: "https://unsplash.it/seed/d/1242/2400",
    link: "https://www.ebel.com/",
  },
  {
    label: "Frederique",
    src: "https://unsplash.it/seed/e/1242/2400",
    link: "https://frederiqueconstant.com/es",
  },
  {
    label: "Alpina",
    src: "https://unsplash.it/seed/f/1242/2400",
    link: "https://alpinawatches.com/es",
  },
]

const BoxImage = ({ data }) => (
  <Link
    href={data.link}
    target="_blank"
    overflow="hidden"
    position="relative"
    className="box-container"
  >
    <Box overflow="hidden" h="full">
      <Image
        transition="1s ease-in-out"
        height="100%"
        width="100%"
        src={data.src}
        object-fit="cover"
        sx={{
          ".box-container:hover &": {
            transform: "scale(1.1)",
          },
        }}
      />
    </Box>

    <Flex
      position="absolute"
      w="full"
      h="full"
      opacity={0}
      transition=".5s ease-in-out"
      backgroundColor="whiteAlpha.700"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      sx={{
        ".box-container:hover &": {
          opacity: 1,
        },
      }}
    >
      <Heading fontSize="2xl">{data.label}</Heading>
    </Flex>
  </Link>
)

const ServicioTecnico = () => {
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={0} width="100%">
      {links.map(data => (
        <BoxImage data={data} />
      ))}
    </Grid>
  )
}

export default ServicioTecnico
