import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";
import ProductContext from "../context/ProductContext";

import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartsList } = useContext(ProductContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartsList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartsList]);

  const handleCheckout = () => {
    alert("Checkout functionality is not implemented yet.");
  };

  const loading = false; // Simulate loading state
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative isolate px-6 pt-1 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {loading ? (
          <div className="text-center text-xl text-gray-600 py-12 sm:py-18 lg:py-24">
            <Loader />
          </div>
        ) : (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8 lg:pt-10">
            <h1 className="mb-3 text-3xl font-bold text-gray-900">
              Your Shopping Cart
            </h1>

            {cartsList.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="space-y-6">
                {/* Vertical list of cart items */}
                <div className="space-y-4">
                  {cartsList.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky bottom-0">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>
                        Subtotal (
                        {cartsList.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        items)
                      </span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
