import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] w-full">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-lying-in-empty-cart-while-confused-10295977-8510197.png"
        alt="empty cart"
        className="w-1/3 lg:w-1/5"
      />
      <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
      <p className="text-gray-600 mb-4">
        Looks like you haven't added anything to your cart yet.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-300"
        type="button"
      >
        Continue Shopping
      </button>
    </div>
  );
};
export default EmptyCart;
