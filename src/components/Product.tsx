import React from 'react';

interface ProductProps {
    onAddtoCart: () => void;
}

const Product: React.FC<ProductProps> = ({ onAddtoCart }) => {
    return (
        <div className="single-product">
            <div className="product-image-container">
                <a href="https://luminskin.myshopify.com/products/dark-circle-defense/">
                    <img className="product-image" src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/DCD_MensHealth.png?v=1595203208" alt="" />
                </a>
            </div>
            <a href="https://luminskin.myshopify.com/products/dark-circle-defense/"><h3 className="product-title">Dark Circle Defense </h3> </a>
            <p className="single-product-price">From <span data-product-code="14">€20.00</span></p>
            <div className="action-buttons">
                <button onClick={() => onAddtoCart()} className="action-btn action-bttn add-complete-skincare-set-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
