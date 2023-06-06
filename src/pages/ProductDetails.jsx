import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByID } from '../services/products'

// import { useMemo } from 'react'

export const ProductDetails = () => {
  const { id } = useParams()
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
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={product.image}
          alt={product.name}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{product.name}</Heading>

            <Text py="2">{product.description}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Agregar al carrito
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      {loading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
      {error && <span>Ha ocurrido un error</span>}
    </>
  )
}
