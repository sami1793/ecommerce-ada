import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const FormBuy = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState
  const toast = useToast()
  const navigate = useNavigate()
  const confirm = () => {
    toast({
      title: 'Compra procesada exitosamente',
      status: 'success',
      position: 'top',
      duration: 4000,
      isClosable: true,
    })
    navigate('products')
  }
  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      mb={5}
      p={6}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={10}>
        Información de envío
      </Heading>
      <form onSubmit={handleSubmit(() => confirm())}>
        <FormControl id="name" isInvalid={errors.name} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            id="name"
            {...register('name', {
              required: {
                value: true,
                message: 'Este campo es requerido',
              },
              minLength: {
                value: 6,
                message: 'El minimo de caracteres es 6',
              },
            })}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" mt={4} isInvalid={errors.email} isRequired>
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
          id="province"
          mt={4}
          isInvalid={errors.province}
          isRequired
        >
          <FormLabel>Provincia</FormLabel>
          <Input
            type="text"
            id="province"
            {...register('province', {
              required: {
                value: true,
                message: 'Este campo es requerido',
              },
              minLength: {
                value: 6,
                message: 'El minimo de caracteres es 6',
              },
            })}
          />
          <FormErrorMessage>{errors.province?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="address" mt={4} isInvalid={errors.address} isRequired>
          <FormLabel>Direccion</FormLabel>
          <Input
            type="text"
            id="address"
            {...register('address', {
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
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>
        <Center>
          <Button
            type="submit"
            colorScheme="teal"
            mt={6}
            variant="solid"
            border="2px"
            bg="black"
            color="white"
            _hover={{ bg: 'white', color: 'black' }}
            isFullWidth
            isLoading={isSubmitting}
          >
            Confirmar compra
          </Button>
        </Center>
      </form>
    </Box>
  )
}
