import {
  Button,
  Card,
  CardBody,
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
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          height={{ base: 'auto', sm: '75vh' }}
          maxW={{ base: '60vw', sm: '300px' }}
          src={product.image}
          alt={product.name}
        />

        <Stack>
          <CardBody>
            <Heading size={{ base: 'lg', sm: 'xl' }} mb={5}>
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
            <Text color="blue.400" fontSize={{ base: 'xl', sm: '2xl' }}>
              {`$${product.price}`}
            </Text>
            <Flex
              gap="5"
              isfullWidth
              direction={{ base: 'column', sm: 'row' }}
              wrap="wrap"
              justifyContent={'initial'}
              alignItems={'center'}
              mt={3}
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
          </CardBody>
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
