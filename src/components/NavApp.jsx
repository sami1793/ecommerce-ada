import {
  Button,
  HStack,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom'
import { CartProducts } from './cartProducts/CartProducts'
import { useContext } from 'react'
import { UserContext } from '../context/UserContex'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { EditIcon, HamburgerIcon } from '@chakra-ui/icons'
export const NavApp = () => {
  const { user, handleLogout } = useContext(UserContext)
  const toast = useToast()
  const Logout = () => {
    signOut(auth)
      .then(() => {
        handleLogout()
        toast({
          title: 'Sesión cerrada',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
      .catch((error) => {
        toast({
          title: 'Error al cerrar sesion',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return (
    <SimpleGrid columns={2} p={5} backgroundColor="gray.800" color="white">
      <Heading>ADA Shop</Heading>
      {/* Deskptop */}
      <HStack as="nav" justifyContent="flex-end">
        <HStack
          gap={2}
          justifyContent="flex-end"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link as={NavLink} to="/">
            Inicio
          </Link>
          <Link as={NavLink} to="/products">
            Productos
          </Link>

          {!user && (
            <Button
              variant="outline"
              color="white"
              border="2px"
              _hover={{ bg: 'white', color: 'black' }}
              _active={{ bg: 'white', color: 'black' }}
              as={NavLink}
              to="/login"
            >
              Iniciar Sesión
            </Button>
          )}
          {user && (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BsFillPersonFill />}
                variant="outline"
                color="white"
                border="2px"
                _hover={{ bg: 'white', color: 'black' }}
                _active={{ bg: 'white', color: 'black' }}
              />

              <MenuList color="black">
                <MenuItem icon={<FiLogOut />} onClick={() => Logout()}>
                  Cerrar Sesión
                </MenuItem>
                <MenuItem icon={<EditIcon />}>Mis pedidos</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
        <CartProducts />
        {/* Mobile */}
        <Menu>
          <MenuButton
            display={{ base: 'flex', md: 'none' }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            border="2px"
            _hover={{ bg: 'white', color: 'black' }}
            _active={{ bg: 'white', color: 'black' }}
          />
          <MenuList color="black">
            <MenuItem as={NavLink} to="/">
              Inicio
            </MenuItem>
            <MenuItem as={NavLink} to="/products">
              Productos
            </MenuItem>
            {!user && (
              <MenuItem as={NavLink} to="/login">
                Iniciar Sesión
              </MenuItem>
            )}
            {user && (
              <>
                <MenuItem>Mis Pedidos</MenuItem>
                <MenuItem onClick={() => Logout()}>Cerrar Sesión</MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </HStack>
    </SimpleGrid>

    //Nav en mobile
  )
}
