import React from "react";
import EntryHeading from "./EntryHeading";
import EntryCaption from "./EntryCaption";
import { plans } from "../utils/data";
import clsx from "clsx";
import { usePlanContext } from "../context/planContext";

export default function SelectPlan({ setActiveStep }) {
  const { yearly, setYearly, activePlan, setActivePlan } = usePlanContext();

  return (
    <div className=" w-full rounded-3xl space-y-7 p-24 relative phone:bg-white phone:p-8 phone:w-[90%] phone:absolute phone:top-40">
      <div>
        <EntryHeading>Select your plan</EntryHeading>
        <EntryCaption>
          You have the option of monthly or yearly billing
        </EntryCaption>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-7">
          <ul className="flex justify-between space-x-8 phone:flex-col phone:space-x-0 phone:space-y-4">
            {plans.map((item) => (
              <li
                key={item.title}
                className={clsx(
                  "border-2 border-coolGray w-full max-h-96 rounded-2xl p-8 space-y-10 hover:cursor-pointer phone:flex phone:space-y-0 phone:space-x-4 phone:h-20 phone:p-0 phone:items-center phone:pl-5",
                  {
                    "bg-gray-200 border-marineBlue":
                      activePlan.title === item.title,
                  }
                )}
                onClick={() => setActivePlan(item)}
              >
                <img src={item.icon} alt={item.title} />
                <div className="">
                  <h1 className="font-bold">{item.title}</h1>
                  {yearly === true ? (
                    <div>
                      <p className="text-coolGray">${item.pricePerYear}/yr</p>
                      <p className="font-normal text-marineBlue">
                        2 months free
                      </p>
                    </div>
                  ) : (
                    <p className="text-coolGray">${item.pricePerMonth}/mo</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center w-full bg-slate-100 rounded-lg py-3 space-x-8">
            <p>Monthly</p>

            <label className="relative inline-block w-[60px] h-[34px]">
              <input
                type="checkbox"
                checked={yearly}
                className="opacity-0 w-0 h-0"
                onChange={() => setYearly((prev) => !prev)}
              />
              <span
                className={clsx(
                  "absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[34px] transition before:absolute before:h-[26px] before:w-[24px] before:left-[4px] before:bottom-[4px] before:bg-white before:rounded-[50%]",
                  {
                    "before:translate-x-[26px] bg-blue-950": yearly === true,
                  }
                )}
              ></span>
            </label>
            <p>Yearly</p>
          </div>
        </div>
        <div className="w-full justify-between flex  phone:fixed phone:bottom-0 phone:right-0 phone:bg-white phone:p-4">
          <button
            className="text-coolGray font-bold w-28 h-12 rounded-lg "
            onClick={() => setActiveStep(1)}
          >
            Go Back
          </button>
          <button
            className="bg-marineBlue text-white w-28 h-12 rounded-lg"
            onClick={() => setActiveStep(3)}
          >
            Next Step
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
