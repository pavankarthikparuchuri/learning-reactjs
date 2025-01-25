import RestroCard from "./RestroCard";
import resData from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { promotedCard } from "./RestroCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Normal JS variable
  let listOfRestaurants = [resData[0], resData[1]];

  //State Variable - Super powerful variable using React Hooks
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtxt, setSearchTxt] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // setTimeout(() => {
    setRestaurants(resData);
    setAllRestaurants(resData);
    // }, 500);
  }, []);

  const RestroCardPromoted = promotedCard(RestroCard);
  if (!onlineStatus) {
    return <h1>Looks like you are offline !! please check your network</h1>;
  }

  //Conditional Rendering - rendering based on a condition is called conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Search Restaurants"
            value={searchtxt}
            data-testid="searchInput"
            className="border border-solid border-black p-2 rounded-md"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
          <div>
            <label>UserName: </label>
            <input
              type="text"
              placeholder="user name"
              className="border border-solid border-black p-2 rounded-md"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.resId}
            key={restaurant.info.resId}
          >
            {restaurant.isPromoted ? (
              <RestroCardPromoted RestroData={restaurant} />
            ) : (
              <RestroCard RestroData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
