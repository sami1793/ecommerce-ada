import {
  collection,
  query,
  getDocs,
  orderBy,
  startAt,
  endAt,
} from 'firebase/firestore'
import { db } from '../firebase/config'

export const allProductsWithFilter = async () => {
  const q = query(
    collection(db, 'products'),
    orderBy('marca'),
    startAt('motorola'),
    endAt('motorola' + '\uf8ff')
  )
  let products = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}
