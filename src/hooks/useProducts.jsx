import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'
import { useParams } from 'react-router-dom'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts()

        setProducts(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  const productID = products.find((c) => c.id === id)
  return {
    products,
    loading,
    error,
    productID,
  }
}
