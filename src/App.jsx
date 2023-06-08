import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { Products } from './pages/Products'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './components/PrivateRoute'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}

export default App
