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
import { Link } from 'react-router-dom'

export const CartProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cartProducts, clearCart, totalCartProducts } =
    useContext(CartProductsContext)
  return (
    <>
      <Button
        variant="outline"
        color="white"
        border="2px"
        _hover={{ bg: 'white', color: 'black' }}
        _active={{ bg: 'white', color: 'black' }}
        onClick={onOpen}
      >
        <BsCartFill />
        <Text>{`(${cartProducts.length})`}</Text>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="2xl">Carrito de Compras:</DrawerHeader>

          <DrawerBody>
            <SimpleGrid gap={5}>
              {cartProducts?.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
              <Divider />
              {cartProducts.length > 0 && (
                <Text as="b" align="end" fontSize="large">
                  TOTAL : {`$${totalCartProducts}`}
                </Text>
              )}
              {!cartProducts.length && (
                <Text align="center">No hay productos en el carrito :(</Text>
              )}
            </SimpleGrid>
          </DrawerBody>

          {!!cartProducts.length && (
            <DrawerFooter>
              <Button mr={2} onClick={clearCart}>
                Vaciar carrito
              </Button>
              <Button
                as={Link}
                to="/Checkout"
                variant="solid"
                border="2px"
                bg="black"
                color="white"
                _hover={{ bg: 'white', color: 'black' }}
                onClick={onClose}
              >
                Finalizar compra
              </Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
