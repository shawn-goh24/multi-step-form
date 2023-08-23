import React, { useState } from "react";
import EntryHeading from "./EntryHeading";
import EntryCaption from "./EntryCaption";
import { addOns } from "../utils/data";
import { usePlanContext } from "../context/planContext";
import clsx from "clsx";
import { useAddonsContext } from "../context/addonContext";

export default function Addons({ setActiveStep }) {
  const { yearly } = usePlanContext();
  const { selectedAddons, setSelectedAddons } = useAddonsContext();

  const isSelected = (item) => {
    const tmpSelected = selectedAddons;

    const index = tmpSelected?.findIndex((tmp) => tmp.title === item.title);
    return index >= 0;
  };

  const handleCheckbox = (item) => {
    const tmpSelected = selectedAddons;

    if (tmpSelected.length === 0) {
      setSelectedAddons([item]);
      return;
    }

    const index = tmpSelected?.findIndex((tmp) => tmp.title === item.title);

    if (index !== -1) {
      tmpSelected.splice(index, 1); // Remove 1 element at the found index
      setSelectedAddons([...tmpSelected]);
    } else {
      setSelectedAddons((prev) => [...prev, item]);
    }
  };

  return (
    <div className=" w-full rounded-3xl space-y-7 p-24 relative phone:bg-white phone:p-8 phone:w-[90%] phone:absolute phone:top-40">
      <div>
        <EntryHeading>Pick add-ons</EntryHeading>
        <EntryCaption>Add-ons help enhance your gaming experience</EntryCaption>
      </div>
      <div className="h-full flex flex-col justify-between">
        <ul className="space-y-4 phone:space-y-4">
          {addOns.map((item) => (
            <li
              key={item.title}
              className={clsx(
                "flex items-center border-2 border-coolGray rounded-lg h-24 px-10 justify-between hover:cursor-pointer phone:px-4",
                {
                  "border-marineBlue bg-gray-100": isSelected(item),
                }
              )}
              onClick={() => {
                handleCheckbox(item);
              }}
            >
              <div className="flex space-x-8 phone:space-x-4">
                <input
                  type="checkbox"
                  checked={isSelected(item)}
                  className="w-6 accent-purplishBlue"
                />
                <div>
                  <p className="font-bold text-marineBlue phone:text-sm">
                    {item.title}
                  </p>
                  <p className="text-coolGray phone:text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
              {yearly ? (
                <p className=" phone:text-sm text-purplishBlue">
                  +${item.pricePerYear}/yr
                </p>
              ) : (
                <p className=" phone:text-sm text-purplishBlue">
                  +${item.pricePerMonth}/mo
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className="w-full justify-between flex phone:fixed phone:bottom-0 phone:right-0 phone:bg-white phone:p-4">
          <button
            className="text-coolGray font-bold w-28 h-12 rounded-lg"
            onClick={() => setActiveStep(2)}
          >
            Go Back
          </button>
          <button
            className="bg-marineBlue text-white w-28 h-12 rounded-lg"
            onClick={() => setActiveStep(4)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
