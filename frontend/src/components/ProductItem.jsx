import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import ProductContext from "../context/ProductContext";

const ProductItem = ({ product }) => {
  const { cartsList, setCartsList } = useContext(ProductContext);

  const rating = (
    <div className="flex items-center">
      {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}

      <span className="ml-1">({product.rating.count})</span>
    </div>
  );

  const handleAddToCart = (product) => {
    const existingProduct = cartsList.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartsList(
        cartsList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartsList([...cartsList, { ...product, quantity: 1 }]);
    }
  };
  console.log(cartsList);

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain object-center p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          <div className="flex items-center text-sm text-yellow-600">
            <span className="mr-1">{rating}</span>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(product)}
          type="button"
          className="cursor-pointer mt-4 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
