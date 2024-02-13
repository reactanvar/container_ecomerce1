import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { NavLink } from "react-router-dom";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category wrapper">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p className="bread_crumb">
          <NavLink to='/'>Home</NavLink> / {props.category}
        </p>
      </div>
      <div className="shopcategory-products ">
        {all_product.map((item, idx) => {
          if (props.category === item.category) {
            return (
              <Item
                key={idx}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
