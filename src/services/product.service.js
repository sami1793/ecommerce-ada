import {
  collection,
  query,
  getDocs,
  orderBy,
  startAt,
  endAt,
  doc,
  getDoc,
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

export const getProductByID = async (id) => {
  const productRef = doc(db, 'products', id)
  const productSnap = await getDoc(productRef)

  if (productSnap.exists()) {
    console.log('Producto:', productSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log('NO se encontro el producto')
  }
}
