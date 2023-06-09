import { useEffect, useState } from 'react'
import { allProductsWithFilter } from '../services/product.service'
import { useDebounce } from './useDebounce'
import { getNewProducts } from '../services/products'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filterProduct, setFilterProduct] = useState({
    name: '',
    marca: '',
    price: '',
  })

  //Para retrasar la búsqueda
  const debounceValue = useDebounce(filterProduct)
  const handleFilter = (e) => {
    setFilterProduct({ ...filterProduct, [e.target.name]: e.target.value })
  }

  //Filtro por marca
  const filterBrand = (data, brand) => {
    let dataFilter
    if (!brand) {
      dataFilter = data
    } else {
      dataFilter = data.filter((d) => d.marca === brand)
    }
    return dataFilter
  }

  //Filtro por precio máximo
  const filterPrice = (data, price) => {
    let dataFilter
    if (!price) {
      dataFilter = data
    } else {
      dataFilter = data.filter((d) => Number(d.price) <= price)
    }
    return dataFilter
  }

  useEffect(() => {
    const getData = async () => {
      try {
        // const data = await getAllProducts()
        const data = await allProductsWithFilter(debounceValue.name)
        setProducts(
          filterBrand(
            filterPrice(data, debounceValue.price),
            debounceValue.marca
          )
        )
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [debounceValue]) //Actualiza cuando cambia el debounce

  useEffect(() => {
    const getData = async () => {
      const data = await getNewProducts()

      setNewProducts(data)
    }
    getData()
  }, []) //Actualiza cuando cambia el debounce

  return {
    products,
    loading,
    error,
    handleFilter,
    filterProduct,
    newProducts,
  }
}
