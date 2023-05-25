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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'

export const Register = () => {
  const { register, handleSubmit, formState } = useForm()

  const createAccount = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
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
  const { errors, isSubmitting } = formState
  console.log(errors)

  return (
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
  )
}
