import { useToast } from '@chakra-ui/react'
import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const initialCart = getLocalStorage('cartProductsStorage') || []
  const [cartProducts, setCartProducts] = useState(initialCart)

  // const [quantityProduct, setQuantityProduct] = useState(1)
  const toast = useToast()
  const addToCart = (product) => {
    // const existProduct = cartProducts.some((p) => p.id === product.id)
    // if (existProduct) {
    //   setQuantityProduct(quantityProduct + 1)
    //   console.log(quantityProduct)
    // } else {
    //   setQuantityProduct(1)
    // }
    // product = { ...product, quantityProduct }
    setCartProducts([...cartProducts, product])
    console.log(cartProducts)

    toast({
      title: 'Se agregó producto al carrito',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  const removeProductToCart = (id) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== id))
    toast({
      title: 'El producto se elimino del carrito',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const clearCart = () => {
    setCartProducts([])
  }

  useEffect(() => {
    setLocalStorage('cartProductsStorage', cartProducts)
  }, [cartProducts])

  return (
    <CartProductsContext.Provider
      value={{ cartProducts, addToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}
