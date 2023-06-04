import { createContext, useState } from 'react'

export const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const addToCart = (product) => {
    // const existProduct = cartProducts.some((p) => p.id === product.id)
    // if (!existProduct) {
    setCartProducts([...cartProducts, product])
    console.log(cartProducts)
    // }
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
