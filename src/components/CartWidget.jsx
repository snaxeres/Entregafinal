import { Link } from 'react-router-dom';
import { useContext } from 'react';
import carrito from '../assets/descarga.png'
import { ItemContext } from '../contexts/ItemsContexts';

export const CartWidget = () => {
    const { items } = useContext(ItemContext)
    return (
        <Link to="/cart">
            <img src={carrito} height={25} />
            <span>{items.length}</span>
        </Link>
    )
};

