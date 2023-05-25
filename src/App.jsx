import { AppLayout } from './layout/AppLayout'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'

function App() {
  return (
    <AppLayout>
      <Login />
    </AppLayout>
  )
}

export default App
