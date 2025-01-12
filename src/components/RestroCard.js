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
  return (
    <div className="restro-card">
      <img className="res-logo" alt="res-logo" src={url} />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>
        {cuisine.map(({ name }) => name).join(",")}
      </h4>
      <h4>{text}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestroCard;
