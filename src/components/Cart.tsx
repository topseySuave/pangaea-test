import React from 'react';
import Select from 'components/Select';
import CartItem from 'components/CartItem';
import Arrow from 'assets/arrow.svg';

interface CartProps {
    onClose: () => void;
    show: boolean;
}

const Cart: React.FC<CartProps> = ({ onClose, show }) => (  
    <aside className={`h-screen fixed top-0 ${show ? 'slide-in' : ''}`}>
        <div className="cart-header flex justify-between">
            <div>
                <button className="close-btn" onClick={() => onClose()}><img src={Arrow} alt="" /></button>
            </div>
            <div className="self-center">
                <h5 className="cart-title">YOUR CART</h5>
            </div>
            <div></div>
        </div>
        <Select />

        <div className="cart-body">
            <CartItem />
            <div className="cart-footer">
                <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <div className="subtotal-price">€48.44</div>
                </div>
            </div>
        </div>
    </aside>
);

export default Cart;
