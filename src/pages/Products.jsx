import { useContext } from 'react'
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
import { Link } from 'react-router-dom'
import { CartProductsContext } from '../context/CartProductsContext'
import { useProducts } from '../hooks/useProducts'
import { BsCartFill } from 'react-icons/bs'
import { Filters } from '../components/filters/Filters'

export const Products = () => {
  const { products, loading, error } = useProducts()
  const { addToCart } = useContext(CartProductsContext)

  return (
    <>
      <Filters />
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
                <Text color="blue.600" fontSize="2xl">
                  {`$${product.price}`}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  as={Link}
                  to={`/products/${product.id}`}
                  variant="ghost"
                  colorScheme="blue"
                >
                  Ver Detalles
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => addToCart(product)}
                >
                  <Text mr={2}>Agregar al carrito</Text>
                  <BsCartFill />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
        {!products.length && !loading && <span>No hay productos</span>}
      </SimpleGrid>
    </>
  )
}
