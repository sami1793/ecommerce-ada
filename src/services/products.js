import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../firebase/config'

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  let products = []
  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}
export const getProductByID = async (id) => {
  const productRef = doc(db, 'products', id)
  const productSnap = await getDoc(productRef)

  if (productSnap.exists()) {
    return productSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log('NO se encontro el producto')
  }
}

//Para obtener los productos mas nuevos (los mas caros)
export const getNewProducts = async () => {
  const q = query(
    collection(db, 'products'),
    orderBy('price', 'desc'),
    limit(3)
  )
  const querySnapshot = await getDocs(q)
  let products = []
  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}
