import { createContext, useState } from 'react'

export const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const addToCart = (product) => {
    //validar si la pelicula ya se encuentra en el array
    const existProduct = cartProducts.some((p) => p.id === product.id)
    if (!existProduct) setCartProducts([...cartProducts, product])
  }
  return (
    <CartProductsContext.Provider value={(cartProducts, addToCart)}>
      {children}
    </CartProductsContext.Provider>
  )
}
