// named import
import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  // STATE VARIABLE - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filtertheRestaurants = listOfRestaurants.filter((res) => res.data.avgRating >4);
            setListOfRestaurants(filtertheRestaurants);
            // console.log(listOfRestaurants)
          }}>Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* restaurant cards */}
        {/* loop on all resList - restuarnat array */}

        {listOfRestaurants.map((restaurant) => (
            /* return peice of jsx */
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resName = "chinni fast food" cuisine="momoos"/>
        <RestaurantCard resName = "kalu champ wala" cuisine="champ"/>
        <RestaurantCard resName = "veerg mlai champ" cuisine=" masala champ"/> */}
      </div>
    </div>
  );
};

export default Body;