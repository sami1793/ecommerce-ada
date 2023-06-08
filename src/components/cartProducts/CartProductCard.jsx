import { DeleteIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
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
          <Heading size="md" mb={5}>
            {product.name}
          </Heading>
          <HStack>
            <Text py="2" as="b">
              Cantidad:
            </Text>
            <Text>{product.quantity}</Text>
          </HStack>
          <Text py="2" as="b">
            Total:
          </Text>{' '}
          {`$${product.price * product.quantity}`}
        </CardBody>

        <CardFooter alignSelf="center">
          <Center>
            <IconButton
              variant="solid"
              colorScheme="red"
              size="sm"
              icon={<DeleteIcon />}
              onClick={() => removeProductToCart(product.id)}
            ></IconButton>
          </Center>
        </CardFooter>
      </Stack>
    </Card>
  )
}
