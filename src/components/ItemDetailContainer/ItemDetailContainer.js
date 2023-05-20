import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseconfig'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const docRef = doc(db, 'Productos', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
  }, [itemId])

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
