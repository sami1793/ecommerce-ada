import { Outlet } from 'react-router-dom'
import { NavApp } from '../components/NavApp'
import { Footer } from '../components/Footer'
import { Flex, Stack } from '@chakra-ui/react'

export const AppLayout = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <NavApp />
      <Stack flex="1">
        <Outlet />
      </Stack>
      <Footer />
    </Flex>
  )
}
