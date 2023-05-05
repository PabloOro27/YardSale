import React, {useContext}from 'react';
import '../styles/Orderitem.css';
import AppContext from '../context/AppContext';
// imagenes
import iconClose from '../assets/icons/icon_close.png';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};//removeFromCart(product);
	return (
        <div className="OrderItem">
			<figure>
				<img src= {product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>Q{product.price}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(product)}/>
		</div>
    );
};

export default OrderItem;