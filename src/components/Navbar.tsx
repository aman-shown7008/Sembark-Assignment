import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const Navbar = () => {
  const items = useAppSelector((state) => state.cart);
  return (
    <nav className="navbarApp container" aria-label="Primary">
      <div>
        <Link className="logo navLink" to="/" aria-label="Home">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">
            Ecommerce<span className="highlight">Web</span>
          </span>
        </Link>
      </div>
      <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart" aria-current="page">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
