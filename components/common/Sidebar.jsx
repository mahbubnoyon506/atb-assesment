"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineDashboard } from "react-icons/md";
import { RiExpandLeftLine } from "react-icons/ri";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`absolute left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#1C2434] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      {sidebarOpen ? (
        <div className="flex justify-end pt-5 pr-5 ">
          <RiExpandLeftLine
            onClick={() => setSidebarOpen(false)}
            className="text-white cursor-pointer"
            size={30}
          />
        </div>
      ) : null}

      <div className="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-6.5">
        <Link className="" href="/">
          <Image
            className=" rounded-full"
            width={150}
            height={32}
            src={"/images/logo.svg"}
            alt="Logo"
            priority
          />
        </Link>
      </div>
      <nav className="px-5 flex flex-col gap-2">
        <Link
          className="text-white bg-slate-600 px-3 py-2 rounded-full flex items-center gap-1"
          href="/dashboard"
        >
          <MdOutlineDashboard size={20} />
          <p>Dashboard</p>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
