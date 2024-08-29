import { useState } from 'react';
import { pizzaCart as initialCart } from '../data/pizzas';

const Cart = () => {
    const [cart, setCart] = useState(initialCart);

    // ELIMINAR PRODUCTO
    const removePizza = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    // AUMENTAR CANTIDAD DE PRODUCTO
    const addPizza = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };
    // REDUCIR CANTIDAD DE PRODUCTO
    const reducePizza = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === id
                    ? { ...item, count: Math.max(item.count - 1, 0) }
                    : item
            );
            return updatedCart.filter(item => item.count > 0);
        });
    };
    // TOTAL DE PRODUCTOS
    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.count, 0);
    };
    // TOTAL PRECIO
    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.count, 0);
    };

    return (
        <div className="cart cartContainer">
            <h2 className='cartText carritoName'>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className='cartText'>El carrito está vacío</p>
            ) : (
                <div>
                    <ul className='cartProductContainer'>
                        {cart.map(item => (
                            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <img src={item.img} alt={item.name} style={{ width: '100px', marginRight: '15px' }} />
                                <div>
                                    <h4 className='cartText cartWeight'>Pizza {item.name}</h4>
                                    <p className='cartText'>Precio: ${item.price}</p>
                                    <p className='cartText'>Cantidad: {item.count}</p>
                                    <button className='cartBtnAdd' onClick={() => addPizza(item.id)}>+</button>
                                    <button className='cartBtnReduce' onClick={() => reducePizza(item.id)}>-</button>
                                    <button className='cartBtnRemove' onClick={() => removePizza(item.id)}>Eliminar</button>
                                    <hr />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='shopContainer'>
                        <h3 className='cartTotal'>Total Productos: {totalQuantity()}</h3>
                        <h3 className='cartTotal'>Total Precio: ${totalPrice()}</h3>
                        <button className='cartBtnPay'>Pagar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;