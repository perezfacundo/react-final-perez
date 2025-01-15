'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Inicio
          </Box>
          <Box as="a" href={'#'}>
            Acerca de nosotros
          </Box>
          <Box as="a" href={'#'}>
            Categorias
          </Box>
          <Box as="a" href={'#'}>
            Contacto
          </Box>
        </Stack>
        <Text>Desarrollado por Perez Facundo</Text>
      </Container>
    </Box>
  )
}