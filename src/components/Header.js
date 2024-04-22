import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
        <div className="header__search">
          <input className="header__searchInput" placeholder="Search Amazon" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__options">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
          <div className="header__options">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <div className="header__optionBasketText">
              <span className="header__optionBasketCount header__optionLineTwo">
                0
              </span>
              <ShoppingCartOutlinedIcon className="header__shoppingIcon" />
            </div>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </div>
      </div>
      <div className="header__navTwo">
        <div className="home__container">
          <a href="#">
            <MenuIcon />
            All
          </a>
          <a href="#">Fresh</a>
          <a href="#">Amazon miniTV</a>
          <a href="#">Sell</a>
          <a href="#">Best Sellers</a>
          <a href="#">Mobiles</a>
          <a href="#">Today's Deals</a>
          <a href="#">
            Prime
            <ArrowDropDownIcon />
          </a>
          <a href="#">Customer Service</a>
          <a href="#">Electronics</a>
          <a href="#">New Releases</a>
          <a href="#">Home & Kitchen</a>
          <a href="#">Fashion</a>
        </div>
      </div>
    </>
  );
}

export default Header;
