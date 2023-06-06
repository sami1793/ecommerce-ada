import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const loginWithEmail = async (data) => {
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
