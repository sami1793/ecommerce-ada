import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1) // Volver atrás en el historial de navegación
  }
  return (
    <Box
      bg="gray.300"
      color="gray.700"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={8}
    >
      <Heading as="h1" size="xl">
        Error 404
      </Heading>
      <Text as="h2" fontSize="2xl" mb={4}>
        Página no encontrada
      </Text>
      <Text fontSize="lg" textAlign="center">
        Lo sentimos, la página que estás buscando no existe :(
      </Text>
      <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="gray"
        variant="solid"
        mt={6}
        onClick={() => handleBackPage()}
      >
        Volver atrás
      </Button>
    </Box>
  )
}
