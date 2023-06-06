import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { loginWithEmail } from '../../services/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContex'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState
  const toast = useToast()
  const { handleLogin } = useContext(UserContext)
  const navigate = useNavigate()
  //console.log(errors)

  const loginAccount = async (data) => {
    try {
      const user = await loginWithEmail(data)
      handleLogin(user)
      toast({
        title: 'Inicio de sesión correcto',
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

  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      backgroundColor={'gray.200'}
    >
      <Container
        as="form"
        onSubmit={handleSubmit(loginAccount)}
        backgroundColor={'white'}
        p={5}
        borderRadius="xl"
      >
        <Text fontSize="2xl" align={'center'} mb={3}>
          Inicio de sesión
        </Text>
        <SimpleGrid gap={5}>
          <FormControl isInvalid={errors.email}>
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
          <FormControl isInvalid={errors.password}>
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

          <Stack mt={4}>
            <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
              Iniciar sesión
            </Button>
            <Button
              as={NavLink}
              to={'/register'}
              variant="outline"
              isLoading={isSubmitting}
            >
              Registrarse
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
