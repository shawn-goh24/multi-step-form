import React from "react";
import clsx from "clsx";
import { steps } from "../utils/data";

export default function SideBar({ activeStep }) {
  return (
    <div
      className="h-full w-1/3 bg-bgSidebarDestop bg-no-repeat bg-cover bg-center rounded-3xl flex flex-col phone:bg-bgSidebarMobile
    phone:rounded-none phone:h-56 phone:w-full"
    >
      <ul className="m-10 space-y-8 phone:flex phone:space-y-0 phone:justify-around phone:items-center phone:h-1/3 ">
        {steps.map((item) => (
          <li key={item.step} className="flex items-center space-x-4">
            <div
              className={clsx(
                "w-12 h-12 rounded-full flex justify-center items-center border-2 border-white text-white font-bold",
                {
                  "bg-lightBlue text-black": activeStep === item.step,
                },
                {
                  "bg-lightBlue text-black": activeStep - 1 === item.step,
                }
              )}
            >
              {item.step}
            </div>
            <div className="leading-tight phone:hidden">
              <p className="text-gray-400 font-bold">STEP {item.step}</p>
              <p className="text-white uppercase font-bold">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
