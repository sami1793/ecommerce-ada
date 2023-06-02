import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  let products = []
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`)
    // console.log(doc.data())
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  console.log(products)
  return products
}
