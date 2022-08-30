import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut,cart,setDisplayProducts,setSearch,handleSearch,search } = useAuth()
  console.log(user)
  const house = <FontAwesomeIcon icon={faHouse} className="house" />
  const userIcon = <FontAwesomeIcon icon={faUser} className="user-icon" />
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
  const heartIcon = <FontAwesomeIcon icon={faHeart} className="heart-icon" />
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
  }
  total = total + product.price * product.quantity;
  totalQuantity = totalQuantity + product.quantity;
}


  return (
    <>
      <div className="navbar-section">
        <div className="left-nav-side">
          <Link to="/" className="text-decoration-none"><h1 className="title" >Deliver.fast</h1></Link>
        </div>
        <div className="middle-nav-side">
          <input type="text" className="search" placeholder="Find Your Choice..."  value={search} onChange={(e) => {setSearch(e.target.value)}}/> <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="right-nav-side">
          <div className="nav-icon-section">
            <span >{heartIcon}</span>
            <span>{cartIcon}<span className="cart-item">({totalQuantity}) </span> </span>

            {user.email ? <div>

              <div className="dropdown">

                <button class="dropbtn">
                  {user.email}
                </button>
                <div className="dropdown-content">
                  <Link to="/dashboard" className=" text-decoration-none">
                    Dashbord
                  </Link>
                  <br />
                  <Link to="/myorders" className=" text-decoration-none">
                    My Orders
                  </Link>
                  <br />
                  <Link to="/login">
                    <button className="iconbtn-logOut " onClick={logOut}>
                      LogOut <span className="cart-item"></span>
                    </button>
                  </Link>
                </div>
              </div>

            </div>

              : <Link to="/signup">{userIcon}</Link>}
            {/* <Link to="/signup">{userIcon}</Link> */}
          </div>
        </div>

      </div>

    </>
  );
};

export default Navbar;