/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface ProductProps {
	onAddtoCart: () => void;
	currency: string;
	product: ProductProp;
}

export interface ProductProp {
	id: number;
	title: string;
	image_url: string;
	price: number;
	quantity: any;
}

const Product: React.FC<ProductProps> = ({ currency, onAddtoCart, product }) => {
	return (
		<div className="single-product">
			<div className="product-image-container">
				<a>
					<img className="product-image" src={product.image_url} alt={product.title} />
				</a>
			</div>
			<a>
				<h3 className="product-title">{product.title}</h3>
			</a>
			<p className="single-product-price">From <span data-product-code={product.id}>{currency}{product.price}.00</span></p>
			<div className="action-buttons">
				<button
					onClick={() => onAddtoCart()}
					className="action-btn action-bttn add-complete-skincare-set-to-cart"
				>
					Add to Cart
                </button>
			</div>
		</div>
	);
};

export default Product;
