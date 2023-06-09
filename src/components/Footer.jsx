import { Box, Link, IconButton, Icon, Text } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Box as="footer" py={4} backgroundColor="gray.800" color="white">
      <Box textAlign="center">
        <Link href="https://twitter.com" isExternal mx={2}>
          <IconButton
            aria-label="Twitter"
            icon={<Icon as={FaTwitter} />}
            size="lg"
            variant="outline"
            borderRadius="full"
            color="white"
            border="2px"
            _hover={{ bg: 'white', color: 'black' }}
          />
        </Link>
        <Link href="https://facebook.com" isExternal mx={2}>
          <IconButton
            aria-label="Facebook"
            icon={<Icon as={FaFacebook} />}
            size="lg"
            variant="outline"
            borderRadius="full"
            color="white"
            border="2px"
            _hover={{ bg: 'white', color: 'black' }}
          />
        </Link>
        <Link href="https://instagram.com" isExternal mx={2}>
          <IconButton
            aria-label="Instagram"
            icon={<Icon as={FaInstagram} />}
            size="lg"
            variant="outline"
            borderRadius="full"
            color="white"
            border="2px"
            _hover={{ bg: 'white', color: 'black' }}
          />
        </Link>
      </Box>
      <Text textAlign="center" mt={2} fontSize="sm">
        © {new Date().getFullYear()} Ada Ecommerce.
      </Text>
      <Text textAlign="center" mt={5} fontSize="small">
        Design with 💛 by <Text as="i">Sami</Text>
      </Text>
    </Box>
  )
}
