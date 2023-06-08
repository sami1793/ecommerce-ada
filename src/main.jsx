import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContex.jsx'
import { CartProductsProvider } from './context/CartProductsContext.jsx'
import { customTheme } from './utils/colors/colors.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProductsProvider>
      <UserProvider>
        <BrowserRouter>
          <ChakraProvider theme={customTheme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </UserProvider>
    </CartProductsProvider>
  </React.StrictMode>
)
