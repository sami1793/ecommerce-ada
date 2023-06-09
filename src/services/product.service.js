import {
  collection,
  query,
  getDocs,
  orderBy,
  startAt,
  endAt,
} from 'firebase/firestore'
import { db } from '../firebase/config'

export const allProductsWithFilter = async (name) => {
  const q = query(
    collection(db, 'products'),
    orderBy('name'),
    startAt(name),
    endAt(name + '\uf8ff')
  )
  let products = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}
