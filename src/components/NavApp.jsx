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
import { EditIcon } from '@chakra-ui/icons'
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
    <SimpleGrid columns={2} p={5}>
      <Heading>ADA Shop</Heading>
      <HStack as="nav" gap="5" justifyContent="flex-end">
        <Link as={NavLink} to="/">
          Inicio
        </Link>
        <Link as={NavLink} to="/products">
          Productos
        </Link>
        <HStack justifyContent="flex-end">
          {!user && (
            <Button as={NavLink} to="/login">
              Iniciar Sesión
            </Button>
          )}
          {user && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsFillPersonFill />}
                variant="outline"
              />

              <MenuList>
                <MenuItem icon={<FiLogOut />} onClick={() => Logout()}>
                  Cerrar Sesión
                </MenuItem>
                <MenuItem icon={<EditIcon />}>Mis pedidos</MenuItem>
              </MenuList>
            </Menu>
          )}
          <CartProducts />
        </HStack>
      </HStack>
    </SimpleGrid>
  )
}
