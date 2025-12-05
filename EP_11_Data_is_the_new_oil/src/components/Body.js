// named import
import { useState, useEffect, useContext } from "react";
import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardIsVeg = withVegLabel(RestaurantCard)

  const {loggedInUser,setUserName} = useContext(UserContext)

  console.log(listOfRestaurants)

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
      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow-md transition active:scale-95"
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

         {/* Divider */}
    <div className="hidden md:block h-8 w-px bg-gray-300"></div>

        <button
          className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          onClick={() => {
            // filter logic here
            const filterLogic = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filterLogic);
          }}
        >
          ⭐ Top Rated
        </button>

        <div className=" mt-6 mx-5">
        <label>UserName: </label>
          <input className="border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
        
      </div>
      <div className="flex flex-wrap items-center justify-evenly ml-32 mr-32 ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.veg ? (<RestaurantCardIsVeg resData={restaurant}/>): (<RestaurantCard resData={restaurant} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
