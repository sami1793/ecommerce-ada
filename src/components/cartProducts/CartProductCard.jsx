import { DeleteIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
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
        maxH={{ base: '100%', sm: '150px' }}
        src={product.image}
        alt={product.name}
        m={3}
      />

      <Stack>
        <CardBody>
          <Heading size="sm">{product.name}</Heading>

          <Text py="2">Cantidad:{product.quantityProduct}</Text>
        </CardBody>

        <CardFooter>
          <IconButton
            variant="solid"
            colorScheme="red"
            icon={<DeleteIcon />}
            onClick={() => removeProductToCart(product.id)}
          ></IconButton>
        </CardFooter>
      </Stack>
    </Card>
  )
}
