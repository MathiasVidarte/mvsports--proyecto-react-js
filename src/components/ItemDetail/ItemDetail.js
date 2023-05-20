import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const { addItem } = useContext(CartContext);
    const [quantityAdded, setquantityAdded] = useState(0)
     const handleOnAdd = (quantity) => {
        setquantityAdded(quantity)
           const item = {
            id, name, price
           }
           addItem(item, quantity)
     }
    
    const previousPrice = 40; // precio anterior
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
               
                <p className="Info">
                    Descripción: {description}
                </p>
                <p>
                 {previousPrice && id === '5' && ( // verifica si el precio anterior existe y si el id es igual a 5
                 <span className="previous-price">
                    Precio anterior: U$S{previousPrice}</span>)} 
               </p>
                <p className="Precio">
                    Precio: U$S {price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/Cart' className="btn btn-primary btn-sm">Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
               
            </footer>
        </article>
    )
}

export default ItemDetail