import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="popular wrapper">

      <div className="title">
        <h1 className="title_section"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
          Our Best Saled Products
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
        </h1>
      </div>

      <div className="popular-item">
        {data_product.map((item, idx) => {
          console.log({ item });
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

export default Popular;
