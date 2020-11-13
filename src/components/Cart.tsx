import React from 'react';
import Select from 'components/Select';
import CartItem from 'components/CartItem';
import Arrow from 'assets/arrow.svg';
import { ProductProp } from './Product';
import { CurrencyProps } from 'assets/currency';

interface CartProps {
	onClose: () => void;
	show: boolean;
	cartItems: Array<ProductProp>;
	currency: CurrencyProps;
	decrement: (product: ProductProp, remove: boolean) => void;
	increment: (product: ProductProp) => void;
	handleCurrencyChange: (e: any) => void;
}

const Cart: React.FC<CartProps> = ({
	onClose,
	show, cartItems,
	currency, decrement,
	handleCurrencyChange,
	increment }) => (
		<aside className={`h-screen fixed top-0 ${show ? 'slide-in' : ''}`}>
			<div className="cart-header flex justify-between">
				<div>
					<button className="close-btn" onClick={() => onClose()}>
						<img src={Arrow} alt="" />
					</button>
				</div>
				<div className="self-center">
					<h5 className="cart-title">YOUR CART</h5>
				</div>
				<div></div>
			</div>
			<Select handleCurrencyChange={handleCurrencyChange} currency={currency} />

			<div className="cart-body">
				{cartItems?.length ? cartItems.map((item) =>
					<CartItem
						key={item.id}
						currency={currency.symbol}
						item={item}
						decrement={decrement}
						increment={increment}
					/>)
					:
					<p>There are no items in your cart.</p>
				}
			</div>

			{cartItems?.length ? <div className="cart-footer">
				<div className="cart-subtotal">
					<span>Subtotal</span>
					<div className="subtotal-price">{currency.symbol}{cartItems?.reduce((acc, curr) => {
						return acc + curr.quantity * curr.price;
					}, 0)}</div>
				</div>
			</div> : null}
		</aside>
	);

export default Cart;
