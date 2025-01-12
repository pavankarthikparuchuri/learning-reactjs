import RestroCard from "./RestroCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Normal JS variable
  let listOfRestaurants = [resData[0], resData[1]];

  //State Variable - Super powerful variable using React Hooks
  const [restaurants, setRestaurants] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
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
