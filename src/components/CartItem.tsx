import React from 'react';
import './style.css';

const CartItem = () => (
    <div className="cart-item-list">
        <div className="cart-item">
            <div className="product-description">
                <span className="remove-product" style={{ cursor: 'pointer' }}>x</span>
                <h6>Up Top Management Set</h6>
                <div>
                    <span className="ff-bau-medium">MADE FOR:</span> Celestial Warehouse
                    </div>
                <div>25-34 | Combination</div>
                <div className="">
                    <span className="d-block">Two Month <span> supply shipped every two months</span>.
                        </span>
                    <span>Cancel or change frequency anytime</span>
                </div>
                <div className="d-none">
                    <span>One time purchase of</span> Two Month <span>supply</span>.
                    </div>
                <div className="quantity">
                    <div className="quantity-selector">
                        <span className="counter-action decrement">-</span>
                        <span className="counter-number counter"> 1 </span>
                        <span className="counter-action increment">+</span>
                    </div>
                    <div className="price">€48.44</div>
                </div>
            </div>
            <div className="product-image">
                <img src="https://cdn.shopify.com/s/files/1/2960/5204/files/Up_Top_Management_2_Month_1_97bf84a7-3e4d-456e-933b-d87e01028583.png?v=1599805293" alt="Product cart img" />
            </div>
        </div>
    </div>
);

export default CartItem;
