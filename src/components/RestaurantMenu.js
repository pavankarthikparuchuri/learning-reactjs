import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menu, filters, resName, resCuisine } = useRestaurantMenu(resId);
  const [openTab, setOpenTab] = useState("");

  const setIsOpen = (name) => {
    if (openTab == name) {
      setOpenTab("");
    } else {
      setOpenTab(name);
    }
  };
  return resName === "NA" ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resName}</h1>
      <p className="font-bold text-lg">{resCuisine}</p>
      {filters.map((item) => (
        <ResCategory
          key={item}
          data={menu.filter((temp) => temp.category === item)}
          isOpen={openTab === item}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
