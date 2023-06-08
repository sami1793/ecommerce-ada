import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByID } from '../services/products'
import { BsCartFill } from 'react-icons/bs'
import { CartProductsContext } from '../context/CartProductsContext'

// import { useMemo } from 'react'

export const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { addToCart } = useContext(CartProductsContext)
  // const [quantity, setQuantity] = useState(1) min 01:38 rutas avanzadas
  const specifications = [
    'Cámara trasera',
    'Display',
    'Procesador',
    'Celular liberado',
  ]

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
          maxH={{ base: '100%', sm: '80vh' }}
          maxW={{ sm: '300px' }}
          src={product.image}
          alt={product.name}
        />

        <Stack>
          <CardBody>
            <Heading size="2xl" mb={5}>
              {product.name}
            </Heading>

            {product.description?.map((d, index) => (
              <>
                <Text as="b" fontSize="lg">
                  {specifications[index]}
                </Text>
                <Text key={index} py="2">
                  {d}
                </Text>
              </>
            ))}
            <Text color="blue.400" fontSize="3xl" mt={3}>
              {`$${product.price}`}
            </Text>
          </CardBody>

          <CardFooter>
            <Flex
              gap="5"
              direction={{ base: 'column', md: 'row' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Button
                borderRadius="full"
                variant="outline"
                border="2px"
                borderColor="black"
                _hover={{ bg: 'black', color: 'white' }}
                as={Link}
                to="/products"
              >
                Volver atras
              </Button>
              <Button
                variant="solid"
                borderRadius="full"
                border="2px"
                borderColor="black"
                bg="black"
                color="white"
                _hover={{ bg: 'white', color: 'black' }}
                onClick={() => addToCart(product)}
              >
                <Text mr={2}>Añadir</Text>
                <BsCartFill />
              </Button>
            </Flex>
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
