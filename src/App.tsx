/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import Product, { ProductProp } from 'components/Product';
import Cart from 'components/Cart';
import './App.css';
import CartImage from 'assets/cart.png';
import Logo from 'assets/logo.png';
import { PRODUCTS } from 'utils/query';
import currencies, { CurrencyProps } from 'assets/currency';

function App() {
  const [defaultCurrency, setDefaultCurrency] = useState<CurrencyProps>({ code: 'USD', symbol: `$` });
  const [overlay, setOverlay] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [cart, setCartItem] = useState<ProductProp[]>([]);
  const { loading, error } = useQuery(PRODUCTS(defaultCurrency.code), { onCompleted: (data) => setProducts(data.products) });

  useEffect(() => {
    // Update cart price when the new products that is returned
    let newCart = cart ? cart.map(cartItem => {
      const existingProductItemInCart = products.find(product => cartItem.id === product.id);
      if (existingProductItemInCart) cartItem.price = existingProductItemInCart.price;
      return cartItem;
    }) : [];
    setCartItem(newCart);
  }, [products]);

  const handleAddToCart = (product: ProductProp) => {
    // here I copy the cart array and get the selected product item only
    let cartCopy = [...cart];
    const existingCart: ProductProp | undefined = cart?.filter(item => item.id === product.id)[0];

    // if the item already exists in the cart I increase the quantity only
    // else add to cart directly.
    if (existingCart) {
      existingCart.quantity = existingCart.quantity + 1 || 1;
      cartCopy.map(obj => [existingCart].find(item => item.id === obj.id) || obj);
      setOverlay(true);
      return setCartItem(cartCopy);
    }

    cartCopy = [...cart, { ...product, quantity: 1 }];
    setOverlay(true);
    return setCartItem(cartCopy);
  };

  const handleRemoveFromCart = (product: ProductProp, removeCompletely: boolean) => {
    const cartCopy = [...cart];
    const existingCart = cart.filter(item => item.id === product.id)[0];

    if (existingCart.quantity > 1) {
      if (removeCompletely) {
        let newCart = cartCopy.filter(item => item.id !== existingCart.id);
        return setCartItem(newCart);
      }
      existingCart.quantity = existingCart.quantity - 1 || 1;
      cartCopy.map(obj => [existingCart].find(item => item.id === obj.id) || obj);
      return setCartItem(cartCopy);
    }
    const filteredLists = cartCopy.filter(item => item.id !== product.id);
    return setCartItem(filteredLists);
  };

  const handleCurrencyChange = ({ target: { value } }: any) => {
    setDefaultCurrency(
      currencies.filter(currency => currency.code === value)[0] ||
      { code: value, symbol: value }
    );
  };

  return (
    <div className="app-container">
      <Header onClickCart={() => setOverlay(true)} itemsInCart={cart?.length || 0} />
      <main className="relative">
        <div className="products-section p-10">
          {products?.length !== 0 && products.map((product) =>
            <Product
              key={product.title}
              currency={defaultCurrency.symbol}
              product={product}
              onAddtoCart={() => handleAddToCart(product)}
            />
          )}
          {loading ? <p>Loading...</p> : null}
        </div>

        <Cart
          currency={defaultCurrency}
          handleCurrencyChange={handleCurrencyChange}
          cartItems={cart}
          show={overlay}
          decrement={handleRemoveFromCart}
          increment={handleAddToCart}
          onClose={() => setOverlay(false)}
        />
      </main>
      <div className={`nav-overlay ${overlay ? 'show' : ''}`} onClick={() => setOverlay(false)}></div>
    </div>
  );
}

interface HeaderProps {
  onClickCart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  itemsInCart: number;
}

const Header: React.FC<HeaderProps> = ({ onClickCart, itemsInCart }) => (
  <header className="shadow flex justify-between py-1 px-10 bg-white">
    <div className="logo w-40">
      <img src={Logo} alt="Lumin skin for men - logo" />
    </div>

    <div className="cart w-10 cursor-pointer self-center p-1 relative" onClick={onClickCart}>
      <img src={CartImage} alt="cart icon - lumin skins" />
      <span className="cart-number absolute cart-count">{itemsInCart}</span>
    </div>
  </header>
);

export default App;
