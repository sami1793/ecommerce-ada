import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Link,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { loginWithEmail, loginWithGoogle } from '../../services/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContex'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState
  const toast = useToast()
  const { handleLogin } = useContext(UserContext)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // Volver atrás en el historial de navegación
  }

  const loginAccount = async (data) => {
    try {
      const user = await loginWithEmail(data)
      handleLogin(user)
      toast({
        title: 'Inicio de sesión correcto',
        status: 'success',
        position: 'top',
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

  const logWithGoogle = async (data) => {
    try {
      const user = await loginWithGoogle(data)
      handleLogin(user)
      toast({
        title: 'Inicio de sesion correcto',
        status: 'success',
        position: 'top',
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

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <IconButton
        icon={<ArrowBackIcon />}
        aria-label="Volver atrás"
        mb={4}
        onClick={() => handleBackClick()}
      />
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Iniciar sesión
      </Heading>
      <Center>
        <Button
          colorScheme="red"
          variant="outline"
          mt={4}
          leftIcon={<FcGoogle />}
          onClick={logWithGoogle}
          isFullWidth
        >
          Iniciar sesión con Google
        </Button>
      </Center>
      <form onSubmit={handleSubmit(loginAccount)}>
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
            colorScheme="blue"
            mt={6}
            isFullWidth
            isLoading={isSubmitting}
          >
            Iniciar sesión
          </Button>
        </Center>
        <Box textAlign="center" mt={4}>
          <Link color="blue.500" as={NavLink} to={'/register'}>
            ¿No tienes una cuenta? Regístrate
          </Link>
        </Box>
      </form>
    </Box>
  )
}
