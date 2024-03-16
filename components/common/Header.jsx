"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";

import Button from "../shared/Button";
import { MdClose, MdOutlineMenu } from "react-icons/md";

function Header() {
  const { data: session } = useSession();
  const [expand, setExpand] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="relative">
      <nav className="bg-white border-gray-200 w-full">
        <div className="flex justify-between items-center px-4 lg:px-6 py-5 bg-emerald-100">
          <div className="flex items-center gap-2">
            <MdOutlineMenu
              onClick={() => setExpand(!expand)}
              className="md:hidden cursor-pointer"
              size={25}
            />
            <Link href="/" className="">
              <Image
                width={150}
                height={150}
                src="/images/logo.svg"
                className=" md:w-52 h-6 sm:h-9"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden w-full md:flex justify-center">
            <ul className="flex items-center text-lg font-medium md:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.href}
                    className="block py-2 pr-4 pl-3 text-white rounded  md:bg-transparent md:text-black lg:p-0 "
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-end w-96">
            {session ? (
              <Button type="button" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-800 text-lg  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none"
                >
                  Log in
                </Link>
                <div>
                  <Button variant="sky">Get started</Button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* mobile menu */}
      </nav>
      <div
        className={`w-full bg-emerald-100 p-5 md:hidden absolute transition-all ease-in-out duration-500  ${
          !expand ? "-top-100" : "top-0"
        }`}
      >
        <div className="flex justify-end">
          <MdClose
            onClick={() => setExpand(false)}
            className=" cursor-pointer"
            size={25}
          />
        </div>
        <Link href="/" className="flex justify-center">
          <Image
            width={300}
            height={300}
            src="/images/logo.svg"
            className="h-8 sm:h-10"
            alt="Logo"
          />
        </Link>
        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.href}
                className="block py-2 pr-4 pl-3 text-black text-lg rounded  lg:bg-transparent lg:text-black lg:p-0 "
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
