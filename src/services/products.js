import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
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
    console.log('Producto:', productSnap.data())
    return productSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log('NO se encontro el producto')
  }
}
