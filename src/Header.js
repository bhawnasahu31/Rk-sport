import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaUser, FaHeart, FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import AuthDrawer from "./AuthDrawer";
import WishlistDrawer from "./WishlistDrawer";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <span className="custom">RK</span>
          <span className="sports">SPORTS</span>
          <span className="wear">WEAR</span>
        </div>

        {/* Desktop Menu */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={handleNavClick}>HOME</NavLink>
          <NavLink to="/about" onClick={handleNavClick}>ABOUT US</NavLink>
          <NavLink to="/process" onClick={handleNavClick}>OUR PROCESS</NavLink>
          <NavLink to="/Design" onClick={handleNavClick}>CUSTOMIZE</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>CONTACT US</NavLink>
        </nav>

        {/* Search */}
        <div className={`search-box ${mobileSearchOpen ? 'mobile-search-active' : ''}`}>
          <input type="text" placeholder="Search for products" />
          <FaSearch className="search-icon" />
        </div>

        {/* Icons */}
        <div className="icons">
          {/* Mobile search icon */}
          <FaSearch 
            className="search-icon-mobile" 
            onClick={toggleMobileSearch}
          />

          <FaUser className="icon-user" onClick={() => setAuthOpen(true)} />
          <FaHeart onClick={() => setWishOpen(true)} style={{ cursor: "pointer" }} />

          <div className="cart" onClick={() => setCartOpen(true)}>
            <FaShoppingCart />
            <span>0 / ₹0.00</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>

      {/* Drawers */}
      <AuthDrawer open={authOpen} onClose={() => setAuthOpen(false)} />
      <WishlistDrawer open={wishOpen} onClose={() => setWishOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;