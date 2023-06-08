import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { registerWithEmail } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const { register, handleSubmit, formState } = useForm()
  const toast = useToast()
  const navigate = useNavigate()

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
    <Flex bgColor="black.900" minH="100vh">
      <Container as="form" onSubmit={handleSubmit(createAccount)}>
        <SimpleGrid gap={5} justifyContent="center">
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

          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
          >
            Crear cuenta
          </Button>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
