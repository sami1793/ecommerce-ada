import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useProducts } from '../hooks/useProducts'
import { Filters } from '../components/filters/Filters'
import { ProductCard } from '../components/products/ProductCard'

export const Products = () => {
  const { products, loading, error } = useProducts()

  return (
    <>
      <Filters />
      <SimpleGrid spacing={5} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
        {error && <span>Ha ocurrido un error</span>}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {!products.length && !loading && <span>No hay productos</span>}
      </SimpleGrid>
      {loading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
    </>
  )
}
