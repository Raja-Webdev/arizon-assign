import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation logic
  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    {
      name: "Products",
      href: "/products",
      current: location.pathname === "/products",
    },
    { name: "Cart", href: "/cart", current: location.pathname === "/cart" },
  ].filter((item) => !item.current); // Filter out current page

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => navigate("/")} className="flex items-center">
              <img
                alt="Arizon"
                src="https://media.glassdoor.com/sqls/7748416/arizon-digital-squarelogo-1662629344058.png"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Arizon
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => navigate(item.href)}
                  className="rounded-md cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="-m-1.5 p-1.5 flex items-center cursor-pointer"
            >
              <img
                alt="Arizon"
                src="https://media.glassdoor.com/sqls/7748416/arizon-digital-squarelogo-1662629344058.png"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Arizon
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    type="button"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
