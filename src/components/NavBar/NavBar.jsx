import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
  useColorMode,
  Center,
  Heading,
  Image,
  Input,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'

import CartWidget from "../CartWidget/CartWidget"

import candy from '../../assets/candy.png'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <Flex alignItems={'center'} justifyContent={'left'}>
            <Image src={candy} alt="candy-image" boxSize="30px" />
            <Heading as='h2' size='md'>Maxikiosco</Heading>
          </Flex>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorías
            </MenuButton>
            <MenuList>
              <MenuItem>Chocolates</MenuItem>
              <MenuItem>Chicles</MenuItem>
              <MenuItem>Bebidas</MenuItem>
              <MenuItem>Galletas</MenuItem>
              <MenuItem>Cigarrillos</MenuItem>
            </MenuList>
          </Menu>

          <Flex alignItems={'center'}>

            <Stack direction={'row'} spacing={6} alignItems={'center'}>
              <CartWidget />

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    name='Dan Abramov'
                    src='https://bit.ly/dan-abramov'
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size='2xl'
                      name='Dan Abramov'
                      src='https://bit.ly/dan-abramov'
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Mis compras</MenuItem>
                  <MenuItem>Mi perfil</MenuItem>
                  <MenuDivider />
                  <MenuItem>Cerrar sesion</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

