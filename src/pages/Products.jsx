import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
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
  return (
    <SimpleGrid spacing={5} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
      {error && <span>Ha ocurrido un error</span>}
      {loading && <span>Loading</span>}
      {products.map((product) => (
        <Card key={product.id} maxW="sm">
          <CardBody>
            <Image
              src={product.image}
              alt={product.name}
              borderRadius="lg"
              maxW={{ base: '100%', sm: '220px' }}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {`$${product.price}`}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Ver Detalles
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
      {!products.length && !loading && <span>No hay productos</span>}
    </SimpleGrid>
  )
}
