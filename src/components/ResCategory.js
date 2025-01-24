import ItemList from "./ItemList";
const ResCategory = ({ data, isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(data[0]?.category);
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data[0]?.category}({data.length})
          </span>
          {isOpen && <span>⬆</span>}
          {!isOpen && <span>⬇</span>}
        </div>
        {isOpen && <ItemList items={data} isCart={false} />}
      </div>
    </div>
  );
};
export default ResCategory;
