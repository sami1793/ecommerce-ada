import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { CartProductCard } from './CartProductCard'
import { CartProductsContext } from '../../context/CartProductsContext'

export const CartProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cartProducts, addToCart, removeProductToCart, clearCart } =
    useContext(CartProductsContext)
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <HiOutlineShoppingBag />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de Compras</DrawerHeader>

          <DrawerBody>
            <SimpleGrid gap={5}>
              {cartProducts?.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
              {!cartProducts.length && (
                <Text align="center">No hay productos en el carrito :(</Text>
              )}
            </SimpleGrid>
          </DrawerBody>

          {!!cartProducts.length && (
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={clearCart}>
                Vaciar carrito
              </Button>
              <Button colorScheme="blue">Finalizar compra</Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}