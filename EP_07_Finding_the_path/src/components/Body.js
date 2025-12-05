// named import
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
      // "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
    );

    const json = await data.json();

    console.log(json);
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filtertheRestaurant = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filtertheRestaurant);
              // search Text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filterLogic = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filterLogic);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
