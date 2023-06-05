import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'
// import { allProductsWithFilter } from '../services/product.service'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  //   const [filterProduct, setFilterProduct] = useState({
  //     name: '',
  //     marca: '',
  //     price: '',
  //   })
  //   const handleFilter = (e) => {
  //     setFilterProduct({ ...filterProduct, [e.target.name]: e.target.value })
  //   }
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts()
        // const data = await allProductsWithFilter()
        setProducts(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return {
    products,
    loading,
    error,
  }
}
