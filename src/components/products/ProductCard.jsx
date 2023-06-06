import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartProductsContext } from '../../context/CartProductsContext'

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartProductsContext)
  return (
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
          <Text color="gray.700" fontSize="2xl">
            {`$${product.price}`}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={Link}
            to={`/products/${product.id}`}
            variant="outline"
            colorScheme="gray"
          >
            Ver Detalles
          </Button>
          <Button
            variant="solid"
            colorScheme="facebook"
            onClick={() => addToCart(product)}
          >
            <Text mr={2}>Agregar al carrito</Text>
            <BsCartFill />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
