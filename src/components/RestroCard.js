import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestroCard = (props) => {
  const { RestroData } = props;
  const {
    image: { url },
    name,
    cuisine,
    costText: { text },
    ratingNew: {
      ratings: {
        DELIVERY: { rating },
      },
    },
  } = RestroData?.info;
  const { deliveryTime } = RestroData?.order;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="restroCard"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400"
    >
      <img className="rounded-lg" alt="res-logo" src={url} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>
        {cuisine.map(({ name }) => name).join(",")}
      </h4>
      <h4>{text}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const promotedCard = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative top-[48px] left-[11px] bg-black text-white rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
