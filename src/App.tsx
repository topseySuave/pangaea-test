import React from 'react';
import Product from 'components/Product';
import Cart from 'components/Cart';
import './App.css';
import CartImage from './assets/cart.png';
import Logo from './assets/logo.png';

function App() {
  const [overlay, setOverlay] = React.useState(false);

  return (
    <div className="app-container">
      <Header onClickCart={() => setOverlay(true)} />
      <main className="relative">
        <div className="products-section p-10">
          <Product onAddtoCart={() => setOverlay(true)} />
          <Product onAddtoCart={() => setOverlay(true)} />
          <Product onAddtoCart={() => setOverlay(true)} />
          <Product onAddtoCart={() => setOverlay(true)} />
          <Product onAddtoCart={() => setOverlay(true)} />
          <Product onAddtoCart={() => setOverlay(true)} />
        </div>

        <Cart show={overlay} onClose={() => setOverlay(false)} />
      </main>
      <div className={`nav-overlay ${overlay ? 'show' : ''}`} onClick={() => setOverlay(false)}></div>
    </div>
  );
}

interface HeaderProps {
  onClickCart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({ onClickCart }) => (
  <header className="shadow flex justify-between py-1 px-10 bg-white">
    <div className="logo w-40">
      <img src={Logo} alt="Lumin skin for men - logo" />
    </div>

    <div className="cart w-10 cursor-pointer self-center p-1 relative" onClick={onClickCart}>
      <img src={CartImage} alt="cart icon - lumin skins" />
      <span className="cart-number absolute cart-count">0</span>
    </div>
  </header>
);

export default App;
