import React from 'react';
import { ProductProp } from './Product';
import './style.css';

interface CartItemProps {
	item: ProductProp;
	currency: string;
	decrement: (product: ProductProp, remove: boolean) => void;
	increment: (product: ProductProp) => void;
}

const CartItem: React.FC<CartItemProps> = ({ currency, item, increment, decrement }) => (
	<div className="cart-item-list">
		<div className="cart-item">
			<div className="product-description">
				<span className="remove-product" style={{ cursor: 'pointer' }} onClick={() => decrement(item, true)}>x</span>
				<h1 className="text-base mb-8 text-left">{item.title}</h1>
				<div className="quantity">
					<div className="quantity-selector">
						<span className="counter-action decrement" onClick={() => decrement(item, false)}>-</span>
						<span className="counter-number counter">{item.quantity}</span>
						<span className="counter-action increment" onClick={() => increment(item)}>+</span>
					</div>
					<div className="price">{currency}{item.price * item.quantity}.00</div>
				</div>
			</div>
			<div className="product-image">
				<img src={item.image_url} alt={item.title} />
			</div>
		</div>
	</div>
);

export default CartItem;
