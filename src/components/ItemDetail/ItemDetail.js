import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('cantidad agregada')}></ItemCount>
            </footer>
        </article>
    )
}

export default ItemDetail