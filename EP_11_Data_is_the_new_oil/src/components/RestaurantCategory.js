import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div>
      <div className="w-6/12 bg-slate-100 shadow-lg rounded-sm p-4 mx-auto my-4 cursor-pointer">
        <div className=" flex justify-between " onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> 🔽 </span>
        </div>
        {/* accordion body */}
        {/* if showItems is true than show otherwise false  */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
