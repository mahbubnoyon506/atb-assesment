"use client";

import React from "react";

import { BsCartCheck } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdGroup } from "react-icons/md";

import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import DashboardLayout from "@/components/DashboardLayout";

function dashboard() {
  return (
    <DashboardLayout>
      {" "}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <IoMdEye className="text-[#3C50E0]" size={25} />
        </CardDataStats>
        <CardDataStats
          title="Total Accounts"
          total="$45,2K"
          rate="4.35%"
          levelUp
        >
          <BsCartCheck className="text-[#3C50E0]" size={25} />
        </CardDataStats>
        <CardDataStats title="Total Active" total="2.450" rate="2.59%" levelUp>
          <FaBriefcase className="text-[#3C50E0]" size={25} />
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <MdGroup className="text-[#3C50E0]" size={25} />
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DashboardLayout>
  );
}

export default dashboard;
