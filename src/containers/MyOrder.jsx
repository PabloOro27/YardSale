import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.css'; 
import OrderItem from '../components/OrderItem';
// imagenes
import iconArrow from '../assets/icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer  = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={iconArrow} alt="arrow" />
            <p className="title-order">My order</p>
        </div>
        <div className="my-order-content">
            {state.cart.map(product =>(
                <OrderItem product = {product} key={ `orderItem-${product.id}` }/>  
            ))}
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>Q{sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </div>
    </aside>
    );
};

export default MyOrder;