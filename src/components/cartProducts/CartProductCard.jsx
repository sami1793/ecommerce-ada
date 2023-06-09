import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartProductsContext } from '../../context/CartProductsContext'

export const CartProductCard = ({ product }) => {
  const { removeProductToCart } = useContext(CartProductsContext)
  return (
    <Card variant="elevated">
      <CardHeader>
        <Flex>
          <Heading size="md">{product.name}</Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <Flex gap={2}>
          <Image
            objectFit="cover"
            maxW={'45%'}
            src={product.image}
            alt={product.name}
          />
          <Flex gap={5} direction="column" alignItems="center">
            <Box>
              <Text py="2" as="b">
                Cantidad:
              </Text>{' '}
              {product.quantity}
              <br></br>
              <Text py="2" as="b">
                Total:
              </Text>{' '}
              {`$${product.price * product.quantity}`}
            </Box>
            <IconButton
              variant="solid"
              colorScheme="red"
              size="sm"
              icon={<DeleteIcon />}
              onClick={() => removeProductToCart(product.id)}
            ></IconButton>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}
