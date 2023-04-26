import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {

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
                    Precio: U$S {price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>

            <footer className='ItemFooter'>
            <button type="button" class="btn btn-primary btn-sm">
              <Link to={`/item/${id}`} className='btn btn-primary btn-sm'>Ver detalle</Link>
            </button>

            </footer>
        </article>
    )
}

export default Item