import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState
  console.log(errors)

  const loginAccount = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const user = userCredential.user
      console.log(user)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
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

        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
        >
          Iniciar sesión
        </Button>
      </SimpleGrid>
    </Container>
  )
}
