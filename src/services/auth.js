import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
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

//Google

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: 'select_account',
  })
  const userGoogle = await signInWithPopup(auth, provider)
  const user = userGoogle.user
  return user
}
