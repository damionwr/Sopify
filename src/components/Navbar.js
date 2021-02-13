import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { ShopContext } from '../context/shopContext'
import './Component.css'




const Navbar = () => {

  const { openCart } = useContext(ShopContext);





  return (
    <nav className="nav">
      <div className="navbar-logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="linkWrapper">
        <li>
          <Link to="/">Collection</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="navbar-icon">
        <SearchIcon style={{ fontSize: 30, color: '#54494b', cursor: 'pointer' }} />
        <ShoppingBasketIcon onClick={() => openCart()} style={{ fontSize: 30, color: '#54494b', cursor: 'pointer' }} />
        <MenuIcon style={{ fontSize: 30, color: '#54494b', cursor: 'pointer' }} />
      </div>
    </nav>
  )
}

export default Navbar
