import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseconfig'
import 'firebase/firestore';


const ItemListContainer = ({ greeting }) => { 
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
   const collectionRef = categoryId
      ? query(collection(db, 'Productos'), where('category', '==', categoryId))
      : collection(db, 'Productos')

  getDocs(collectionRef)
  .then(response => {
    const productsAdapted = response.docs.map(doc =>{
      const data = doc.data()
      return {id: doc.id, ...data}

    })
    setProducts(productsAdapted)
  })
  .catch(error => {
    console.log(error)
  })
  
  
  })

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products= {products} />
    </div>
  )
}

export default ItemListContainer
