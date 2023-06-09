import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import { BsBoxSeam } from 'react-icons/bs'
import { TbPigMoney } from 'react-icons/tb'
import { MdPeopleOutline } from 'react-icons/md'
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from '../components/products/ProductCard'
import { Button } from '@chakra-ui/button'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { newProducts } = useProducts()
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap={5}
        p={5}
        bgColor="gray.100"
        // h="100vh"
      >
        <Heading size="xl" color="blue.600">
          Novedades
        </Heading>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <SimpleGrid spacing={5} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
            {newProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </Flex>
        <Button
          borderRadius="full"
          variant="outline"
          border="2px"
          borderColor="blue.500"
          color="blue.500"
          _hover={{ bg: 'blue.500', color: 'white' }}
          as={Link}
          to="/products"
          size="lg"
          m={5}
        >
          Ver catálogo completo
        </Button>
      </Flex>
      <Flex justifyContent="center" p={5} gap={5} wrap="wrap">
        <Box
          width="280px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <BsBoxSeam size={50} />
          <Text fontSize="larger" as="b" textAlign="center">
            Envío rápido o recogida en tienda
          </Text>
          <Text textAlign="center">
            Entrega rápida, envío gratuito o recogida en tienda.
          </Text>
        </Box>
        <Box
          width="280px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <TbPigMoney size={50} />
          <Text fontSize="larger" as="b" textAlign="center">
            Opciones de financiación
          </Text>
          <Text textAlign="center">
            Consulta los planes de pago en cuotas mensuales.
          </Text>
        </Box>
        <Box
          width="280px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <MdPeopleOutline size={50} />
          <Text fontSize="larger" as="b" textAlign="center">
            Ayuda
          </Text>
          <Text textAlign="center">
            Habla con nuestro equipo de Especialistas por teléfono o chat.
          </Text>
        </Box>
      </Flex>
    </>
  )
}
