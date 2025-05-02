import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import ProductContext from "../context/ProductContext";

const CartItem = ({ item }) => {
  const { cartsList, setCartsList } = useContext(ProductContext);

  const handleRemoveFromCart = (productId) => {
    setCartsList(cartsList.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }

    setCartsList(
      cartsList.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain rounded"
      />

      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-indigo-600 font-semibold mt-1">${item.price}</p>

        <div className="mt-3 flex items-center">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-100"
          >
            -
          </button>
          <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
            {item.quantity}
          </div>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="self-start text-gray-400 hover:text-red-600"
      >
        <MdOutlineClose className="w-7 h-7" />
      </button>
    </div>
  );
};

export default CartItem;
