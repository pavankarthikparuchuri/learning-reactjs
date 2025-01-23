const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between pb-4"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.name}</span>
                <span> - ₹ {item.price === 0 ? 100 : item.price}</span>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
            <div className="w-3/12 max-w-24">
              <div className="absolute">
                <button className="px-3 py-1 bg-black shadow-lg m-16 mt-[74px] ml-[15px] rounded-lg text-white text-mg font-semibold">
                  ADD +
                </button>
              </div>
              <img src={item.url} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
