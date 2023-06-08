import { useContext } from 'react'
import { UserContext } from '../context/UserContex'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext)
  //Si no esta logueado lo manda a la pagina de Login
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
