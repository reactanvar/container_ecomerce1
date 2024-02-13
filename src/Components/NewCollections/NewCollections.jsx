import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <div className="new-collections wrapper">

      <div className="title">
        <h1 className="title_section"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
          Our Other Products
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/1200px-Line_segment.svg.png" alt="" />
        </h1>
      </div>



      <div className="collections">
        {new_collection.map((item, idx) => {
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

export default NewCollections;
