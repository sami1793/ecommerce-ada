import {
  Button,
  Divider,
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
import { CartProductCard } from './CartProductCard'
import { CartProductsContext } from '../../context/CartProductsContext'
import { BsCartFill } from 'react-icons/bs'

export const CartProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cartProducts, clearCart, totalCartProducts } =
    useContext(CartProductsContext)
  return (
    <>
      <Button colorScheme="facebook" onClick={onOpen}>
        <BsCartFill />
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
              <Divider />
              <Text align="end">TOTAL : {totalCartProducts}</Text>
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
