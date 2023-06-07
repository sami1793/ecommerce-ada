import { SearchIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'

export const Filters = ({ handleFilter, filterProduct }) => {
  return (
    <SimpleGrid
      w="full"
      maxW={{ base: '500px', md: 'full' }}
      columns={{ base: 1, md: 3 }}
      gap={3}
      justifyContent="center"
      p={5}
    >
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          type="text"
          name="name"
          value={filterProduct.name}
          placeholder="Buscar.."
          onChange={handleFilter}
        ></Input>
      </InputGroup>

      <Select
        placeholder="Marca"
        name="marca"
        value={filterProduct.marca}
        onChange={handleFilter}
      >
        <option value="motorola">Motorola</option>
        <option value="samsung">Samsung</option>
        <option value="xiaomi">Xiaomi</option>
      </Select>
      <InputGroup>
        <Input
          type="number"
          placeholder="Precio máximo"
          name="price"
          value={filterProduct.price}
          onChange={handleFilter}
        ></Input>
      </InputGroup>
    </SimpleGrid>
  )
}
