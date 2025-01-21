import resData from "./mockData";
import { useState, useEffect } from "react";
import { mockFoodData } from "./mockFoodData";
const useRestaurantMenu = (resId) => {
  const [resName, setResName] = useState("NA");
  const [resCuisine, setResCuisines] = useState("NA");
  const [menu, setMenu] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    let data = resData.filter((item) => item.info.resId == resId);
    setResName(data[0]?.info?.name);
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
  return {
    menu: menu,
    filteredData: filteredData,
    filters: filters,
    setFilteredData: setFilteredData,
    resName: resName,
    resCuisine: resCuisine,
  };
};

export default useRestaurantMenu;
