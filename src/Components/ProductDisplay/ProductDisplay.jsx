import React, { useContext } from "react";
import "./ProductDisplay.css";
import { Button } from "@material-tailwind/react";
import { ShopContext } from "../../Context/ShopContext";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay wrapper">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStarOutline/>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        {/* <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div> */}
        <Button onClick={() => {
            addToCart(product.id);
          }}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default ProductDisplay;
