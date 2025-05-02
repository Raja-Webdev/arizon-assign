import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ProductContext from "../context/ProductContext";

const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [isError, setIsError] = useState(false);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      setIsError(false);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="mx-auto max-w-7xl h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Error fetching products
          </h1>
          <button
            onClick={fetchData}
            className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
            <h1 className="mb-8 text-3xl font-bold text-gray-900">Products</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
