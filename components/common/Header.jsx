import Image from "next/image";
import Link from "next/link";
import React from "react";

import Button from "../shared/Button";

function Header() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              width={200}
              height={200}
              src="/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none"
            >
              Log in
            </Link>
            <Button variant="sky">Get started</Button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.href}
                    className="block py-2 pr-4 pl-3 text-white rounded  lg:bg-transparent lg:text-black lg:p-0 "
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
