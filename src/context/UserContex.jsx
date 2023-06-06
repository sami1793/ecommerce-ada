import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        // console.log('Ya estaba logeado')
        setUser(user)
        console.log(uid)
        // ...
      } else {
        // console.log('El usuario no esta logeado')
        setUser(null)
      }
    })
  }, [])
  // Login
  const handleLogin = (user) => {
    setUser(user)
  }
  //Logout
  const handleLogout = () => {
    // signOut(auth).then(() => {
    setUser(null)
    // })
  }
  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
