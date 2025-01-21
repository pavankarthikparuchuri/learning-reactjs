import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menu, filteredData, filters, setFilteredData, resName, resCuisine } =
    useRestaurantMenu(resId);

  return resName === "NA" ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resName}</h1>
      <p>{resCuisine}</p>
      {filters.map((item) => {
        return (
          <button
            onClick={() =>
              setFilteredData(menu.filter((temp) => temp.category === item))
            }
          >
            {item}
          </button>
        );
      })}
      <h2>Menu</h2>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
