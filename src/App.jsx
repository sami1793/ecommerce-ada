import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { Products } from './pages/Products'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import { Login } from './pages/auth/Login'
// import { FormLayout } from './layout/FormLayout'
import { Register } from './pages/auth/Register'
// import { Login } from './pages/auth/Login'

function App() {
  return (
    // <>
    //   <AppLayout>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/products" element={<Products />}></Route>
    //       <Route path="/products/:id" element={<ProductDetails />}></Route>
    //       <Route path="*" element={<h1>404 Not Found</h1>}></Route>
    //     </Routes>
    //   </AppLayout>

    //   <Routes>
    //     <Route path="/iniciar-sesion" element={<Login />}></Route>
    //     <Route path="/register" element={<Register />}></Route>
    //   </Routes>
    // </>

    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Route>

      <Route path="/iniciar-sesion" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}

export default App
