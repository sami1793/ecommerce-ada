import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { loginWithEmail } from '../../services/auth'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState
  //console.log(errors)

  const loginAccount = async (data) => {
    loginWithEmail(data)
    alert('logeado')
  }

  return (
    <Container as="form" onSubmit={handleSubmit(loginAccount)}>
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
  )
}
