import { CashIcon, CreditCardIcon, CalendarIcon } from "@heroicons/react/outline";
import React from "react";
import Chart from "./chart/Chart";
import { InvestDB } from "../leftPart/utils/InvestmentsDB";
import PortfolioItem from "./PortfolioItem";

function RightPart() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6 bg-stone-50 m-2 rounded-3xl ">
      {/* top section */}
      <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12">
        <div className="space-y-6 w-full items-center justify-center flex flex-col bg-stone-200 p-4 rounded-3xl trans hover:drop-shadow-xl  ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CashIcon className="w-8 h-8 stroke-1 " />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> On Time </h2>
            <h2 className="font-bold text-xl">$ 120.55 </h2>
          </span>
        </div>

        <div className="space-y-6 w-full items-center justify-center flex flex-col bg-stone-200 p-4 rounded-3xl trans hover:drop-shadow-xl ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Round-Ups </h2>
            <h2 className="font-bold text-xl">$ 200.13 </h2>
          </span>
        </div>

        <div className="space-y-6 w-full items-center justify-center flex flex-col bg-stone-200 p-4 rounded-3xl trans hover:drop-shadow-xl ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CalendarIcon  className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Month </h2>
            <h2 className="font-bold text-xl">$ 613.13 </h2>
          </span>
        </div>

      </div>
      <div className="border-t border-gray-200 w-full my-4" />
      {/* chart */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl"> Potential </h1>
        <Chart />
      </div>
      {/* bottom part */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="text-xl font-bold xl:text-3xl py-4 "> Events </h1>
        <div className="flex items-center justify-center space-x-6 overflow-x-auto w-full py-4 ">
          {InvestDB.map((item) => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPart;
