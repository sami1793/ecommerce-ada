import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { BsBoxSeam } from 'react-icons/bs'
import { TbPigMoney } from 'react-icons/tb'
import { MdPeopleOutline } from 'react-icons/md'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Home = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Heading>Novedades</Heading>
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
