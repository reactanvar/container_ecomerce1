import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">

      <div className="title">
        <h1 className="title_section"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
            Recommendated Products
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
        </h1>
      </div>

      <div className="relatedproducts-item wrapper">
        {data_product.map((item, idx) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
