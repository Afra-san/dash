import React from "react";
import InvestItem from "./InvestItem";
import { InvestDB } from "./utils/InvestmentsDB-2";

function LeftPart() {
  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full m-2 bg-stone-50 rounded-3xl">
      {/* top section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className="font-bold text-xl xl:text-3xl pb-2 "> DashBoard </h1>
        <p className="text-md text-gray-800">
          Find all of your investment information
        </p>
        <div className="rounded-3xl items-start justify-start flex flex-col px-6 pt-8 pb-4 trans hover:drop-shadow-xl  bg-stone-200 mt-6 w-full ">
          <h1 className="font-semibold"> Jordan Carter </h1>
          <h1 className=" text-3xl xl:text-5xl font-bold py-6 ">
            $ 920,434.00
          </h1>
        </div>
        <div className="rounded-3xl items-start justify-start flex flex-col px-6 pt-8 pb-4 trans hover:drop-shadow-xl  bg-stone-200 mt-6 w-full ">
          <h1 className="font-semibold"> Jordan Carter </h1>
          <h1 className=" text-3xl xl:text-5xl font-bold py-6 ">
            $ -220.00
          </h1>
        </div>
      </div>
      
      {/* bottom section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6 ">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 ">
          Recent Investment
        </h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPart;
