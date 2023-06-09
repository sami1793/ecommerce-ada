import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  useToast,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { registerWithEmail } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const { register, handleSubmit, formState } = useForm()
  const toast = useToast()
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // Volver atrás en el historial de navegación
  }

  const createAccount = async (data) => {
    try {
      await registerWithEmail(data)
      toast({
        title: 'Cuenta creada correctamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate('/')
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    }
  }
  const { errors, isSubmitting } = formState
  console.log(errors)

  return (
    // <Flex bgColor="black.900" minH="100vh">
    //   <Container as="form" onSubmit={handleSubmit(createAccount)}>
    //     <SimpleGrid gap={5} justifyContent="center">
    //       <FormControl isInvalid={errors.email}>
    //         <FormLabel>Email</FormLabel>
    //         <Input
    //           type="email"
    //           id="email"
    //           {...register('email', {
    //             required: {
    //               value: true,
    //               message: 'Este campo es requerido',
    //             },
    //             pattern: {
    //               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    //               message: 'Este email no es válido',
    //             },
    //           })}
    //         />
    //         <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
    //       </FormControl>
    //       <FormControl isInvalid={errors.password}>
    //         <FormLabel>Contraseña</FormLabel>
    //         <Input
    //           type="password"
    //           id="password"
    //           {...register('password', {
    //             required: {
    //               value: true,
    //               message: 'Este campo es requerido',
    //             },
    //             minLength: {
    //               value: 8,
    //               message: 'El minimo de caracteres es 8',
    //             },
    //           })}
    //         />
    //         <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
    //       </FormControl>

    //       <Button
    //         mt={4}
    //         colorScheme="teal"
    //         type="submit"
    //         isLoading={isSubmitting}
    //       >
    //         Crear cuenta
    //       </Button>
    //     </SimpleGrid>
    //   </Container>
    // </Flex>
    <Flex bgColor="black.900" minH="100vh">
      <Box
        mx="auto"
        minW={{ base: '95%', sm: '400px' }}
        mt={8}
        mb={8}
        p={6}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bgColor="white"
      >
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Volver atrás"
          mb={4}
          variant="solid"
          color="white"
          bg="black.900"
          border="2px"
          _hover={{ bg: 'black', color: 'white' }}
          onClick={() => handleBackClick()}
        />
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Registrarse
        </Heading>

        <form onSubmit={handleSubmit(createAccount)}>
          <FormControl id="email" isInvalid={errors.email} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Este email no es válido',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="password"
            mt={4}
            isInvalid={errors.password}
            isRequired
          >
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              id="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
                minLength: {
                  value: 8,
                  message: 'El minimo de caracteres es 8',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Center>
            <Button
              type="submit"
              bg="black"
              border="2px"
              color="white"
              _hover={{ bg: 'white', color: 'black' }}
              mt={6}
              isFullWidth
              isLoading={isSubmitting}
            >
              Crear cuenta
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  )
}
