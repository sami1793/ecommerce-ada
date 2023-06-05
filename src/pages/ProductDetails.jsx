import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
// import { useProducts } from '../hooks/useProducts'
import { useParams } from 'react-router-dom'
import { getProductByID } from '../services/product.service'
// import { useMemo } from 'react'

export const ProductDetails = () => {
  const { id } = useParams()
  // const { products } = useProducts()
  // console.log(products, id)
  // const product = products.find((p) => p.id === id)
  // console.log(product.name)

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductByID(id)

        setProduct(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [id])
  console.log(product)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        // src={product.image}
        alt="{product.name}"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">product.description</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Agregar al carrito
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
