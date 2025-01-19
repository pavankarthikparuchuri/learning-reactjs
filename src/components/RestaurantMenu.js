import { useEffect, useState } from "react";
import resData from "../utils/mockData";
import { mockFoodData } from "../utils/mockFoodData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resName, setResName] = useState("NA");
  const [resCuisine, setResCuisines] = useState("NA");
  const { resId } = useParams();
  const [menu, setMenu] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    let data = resData.filter((item) => item.info.resId == resId);
    setResName(data[0]?.info?.name);
    console.log(data[0]?.info?.cuisine.map(({ name }) => name).join(","));
    setResCuisines(data[0]?.info?.cuisine.map(({ name }) => name).join(","));
    let arr = [];
    let fil = [];
    mockFoodData.forEach((item1) => {
      item1.menu.categories.forEach((item2) => {
        item2.category.items.forEach((item3) => {
          let obj = {};
          fil.push(item1?.menu?.name);
          obj.category = item1?.menu?.name;
          obj.name = item3?.item?.name;
          obj.price = item3?.item?.price;
          obj.id = item3?.item?.id;
          obj.url = item3?.item?.item_image_thumb_url;
          obj.description = item3?.item.desc;
          obj.rating = item3?.item?.rating?.value;
          arr.push(obj);
          setMenu(arr);
          setFilteredData(arr);
        });
      });
    });
    setFilters([...new Set(fil)]);
  }, []);
  console.log(filters, "::filters");
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
