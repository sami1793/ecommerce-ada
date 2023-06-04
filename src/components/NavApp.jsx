import { Button, HStack, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom'
import { CartProducts } from './cartProducts/CartProducts'
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
        <HStack justifyContent="flex-end">
          <Button as={NavLink} to="/iniciar-sesion">
            Iniciar Sesion
          </Button>
          {/* <Button>
          <HiOutlineShoppingBag />
        </Button> */}
          <CartProducts />
        </HStack>
      </HStack>
    </SimpleGrid>
  )
}
