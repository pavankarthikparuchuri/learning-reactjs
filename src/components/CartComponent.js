import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cart";

const CartComponent = () => {
  const data = useSelector(({ cart: { items } }) => items);
  const dispath = useDispatch();
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {data.length ? (
          <>
            <button
              className="border p-2 m-1 rounded-md bg-gray-50 hover:bg-gray-200 shadow-md"
              onClick={() => dispath(clearCart())}
            >
              Clear Cart
            </button>
            <ItemList items={data} isCart={true} />
          </>
        ) : (
          <h2>Add Items to the Cart</h2>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
