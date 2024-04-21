import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Header Logo */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />

      {/* Search Input */}
      <div className="header__search">
        <input className="header__searchInput" placeholder="Search Amazon" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Header Navigation */}
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
            <span className="header__optionBasketCount header__optionLineTwo">0</span>
            <ShoppingCartOutlinedIcon className="header__shoppingIcon" />
          </div>
          <span className="header__optionLineTwo">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
