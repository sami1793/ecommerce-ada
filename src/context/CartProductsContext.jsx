import { useToast } from '@chakra-ui/react'
import { createContext, useState } from 'react'

export const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const toast = useToast()
  const addToCart = (product) => {
    // const existProduct = cartProducts.some((p) => p.id === product.id)
    // if (!existProduct) {
    setCartProducts([...cartProducts, product])
    console.log(cartProducts)
    // }
    toast({
      title: 'Se agregó producto al carrito',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  const removeProductToCart = (id) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const clearCart = () => setCartProducts([])

  return (
    <CartProductsContext.Provider
      value={{ cartProducts, addToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}
