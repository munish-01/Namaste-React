import { CDN_URL } from "./../utils/constants";

const styleCard = {
  backgroundColor: "#D3D3D3",
};

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="w-[280px] overflow-hidden shadow-xl/30 bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-100 mt-10">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
          className="w-full h-full object-cover"
          onError={(e)=>{
            e.target.src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rng/md/carousel/production/"
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-900 line-clamp-1">
          {name}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-1">
          {cuisines?.join(", ")}
        </p>

        <div className="flex items-center text-sm text-gray-700 justify-between">
          {/* Rating box */}
          <span className="flex items-center gap-1 bg-green-600 text-white font-semibold px-2 py-1 rounded-md text-xs">
            ⭐ {avgRating}
          </span>

          {/* Distance */}
          <span className="text-gray-600 text-sm">• {sla?.slaString}</span>

          {/* Cost */}
          <span className="text-gray-600 text-sm">• {costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

//Higher order component

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div  className="relative">
        <label className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
