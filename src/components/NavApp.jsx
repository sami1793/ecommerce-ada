import { Button, HStack, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
export const NavApp = () => {
  return (
    <SimpleGrid columns={2} p={5}>
      <Heading>ADA Shop</Heading>
      <HStack as="nav" gap="5" justifyContent="flex-end">
        <Link as={NavLink} to="/">
          Home
        </Link>
        <Link as={NavLink} to="/products">
          Productos
        </Link>
        <Button as={NavLink} to="/iniciar-sesion">
          Iniciar Sesion
        </Button>
        <Button as={NavLink} to="/carrito">
          <HiOutlineShoppingBag />
        </Button>
      </HStack>
    </SimpleGrid>
  )
}
