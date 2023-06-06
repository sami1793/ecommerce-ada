import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const loginWithEmail = async (data) => {
  // try {
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     data.email,
  //     data.password
  //   )
  //   const user = userCredential.user
  //   return user
  // } catch (error) {
  //   const errorCode = error.code
  //   const errorMessage = error.message
  //   console.log(errorCode, errorMessage)
  // }

  const userCredential = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  )
  const user = userCredential.user
  return user
}

export const registerWithEmail = async (data) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  )
  const user = userCredential.user
  return user
}
