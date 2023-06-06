import { useToast } from '@chakra-ui/react'
import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const initialCart = getLocalStorage('cartProductsStorage') || []
  const [cartProducts, setCartProducts] = useState(initialCart)

  const toast = useToast()
  const addToCart = (product) => {
    const existProduct = cartProducts.some((p) => p.id === product.id)
    if (existProduct) {
      const newCartProducts = cartProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
      setCartProducts(newCartProducts)
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }])
      console.log(cartProducts)
    }

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

  const totalCartProducts = cartProducts.reduce((suma, product) => {
    return suma + product.price * product.quantity
  }, 0)

  //se almacena en local storage cada vez que hay un cambio en cartProducts
  useEffect(() => {
    setLocalStorage('cartProductsStorage', cartProducts)
  }, [cartProducts])

  return (
    <CartProductsContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeProductToCart,
        clearCart,
        totalCartProducts,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}
