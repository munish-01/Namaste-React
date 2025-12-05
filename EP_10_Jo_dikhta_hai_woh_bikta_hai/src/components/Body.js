// named import
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  }
    // hook utilize which i have created -
    const styleCard = {
      border: "1px solid black",
      margin: "20px",
      padding: "10px",
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
      return (
        <div style={styleCard}>
          <h1>
            Looks like you are offline! Also check your internet connection
          </h1>
        </div>
      );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-orange-400 m-3 rounded-lg hover:bg-orange-600"
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
        <div className="Search m-4 p-4 flex items-center">
        <button
          className="px-4 py-1 bg-gray-300 rounded-lg hover:bg-gray-500"
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
      </div>
      <div className="flex flex-wrap items-center justify-center ml-32 mr-32 ">
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
