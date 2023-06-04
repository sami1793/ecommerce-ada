import { DeleteIcon } from '@chakra-ui/icons'
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
import { useContext } from 'react'
import { CartProductsContext } from '../../context/CartProductsContext'

export const CartProductCard = ({ product }) => {
  const { removeProductToCart } = useContext(CartProductsContext)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '150px' }}
        src={product.image}
        alt={product.name}
      />

      <Stack>
        <CardBody>
          <Heading size="sm">{product.name}</Heading>

          <Text py="2">Cantidad:</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => removeProductToCart(product.id)}
          >
            <DeleteIcon />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
