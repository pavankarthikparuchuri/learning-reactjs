import RestroCard from "./RestroCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //Normal JS variable
  let listOfRestaurants = [resData[0], resData[1]];

  //State Variable - Super powerful variable using React Hooks
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtxt, setSearchTxt] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setRestaurants(resData);
      setAllRestaurants(resData);
    }, 500);
  }, []);

  //Conditional Rendering - rendering based on a condition is called conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurants"
            value={searchtxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setRestaurants(() =>
                allRestaurants.filter(({ info: { name } }) =>
                  name.toLowerCase().includes(searchtxt.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic Here
            listOfRestaurants = listOfRestaurants.filter(
              ({
                info: {
                  ratingNew: {
                    ratings: {
                      DELIVERY: { rating },
                    },
                  },
                },
              }) => rating > 4
            );
            setRestaurants((data) =>
              data.filter(
                ({
                  info: {
                    ratingNew: {
                      ratings: {
                        DELIVERY: { rating },
                      },
                    },
                  },
                }) => rating > 4.3
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {restaurants.map((restaurant) => (
          <RestroCard key={restaurant.info.resId} RestroData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
