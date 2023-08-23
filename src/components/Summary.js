import React from "react";
import EntryHeading from "./EntryHeading";
import EntryCaption from "./EntryCaption";
import { usePlanContext } from "../context/planContext";
import { useAddonsContext } from "../context/addonContext";

export default function Summary({ setActiveStep }) {
  const { activePlan, yearly } = usePlanContext();
  const { selectedAddons } = useAddonsContext();

  const totalAddonCost = selectedAddons.reduce((acc, i) => {
    if (yearly) return acc + i.pricePerYear;
    return acc + i.pricePerMonth;
  }, 0);

  const totalCost = yearly
    ? activePlan.pricePerYear + totalAddonCost
    : activePlan.pricePerMonth + totalAddonCost;

  return (
    <div className=" w-full rounded-3xl space-y-7 p-24 relative phone:bg-white phone:p-8 phone:w-[90%] phone:absolute phone:top-40">
      <div>
        <EntryHeading>Finishing up</EntryHeading>
        <EntryCaption>
          Double-check everything looks OK before confirming.
        </EntryCaption>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-7">
          <div className="w-full bg-gray-100 rounded-2xl p-8 h-fit">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xl font-bold text-marineBlue phone:text-base">
                  {activePlan.title} {yearly ? "(Yearly)" : "(Monthly)"}
                </p>
                <p
                  className="hover:cursor-pointer underline text-coolGray phone:text-sm"
                  onClick={() => setActiveStep(2)}
                >
                  Change
                </p>
              </div>
              <p className="text-xl font-bold text-marineBlue phone:text-base">
                {yearly
                  ? `$${activePlan.pricePerYear}/yr`
                  : `$${activePlan.pricePerMonth}/mo`}
              </p>
            </div>
            <div className="w-full h-[2px] bg-coolGray" />
            {selectedAddons.map((item) => (
              <div className="flex items-center justify-between mt-4">
                <p className="text-coolGray ">{item.title}</p>
                <p className="font-bold text-marineBlue">
                  {yearly
                    ? `+$${item.pricePerYear}/yr`
                    : `+$${item.pricePerMonth}/mo`}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between ml-8">
            <p className="text-coolGray text-lg phone:text-base">
              Total {yearly ? "(per year)" : "(per month)"}
            </p>
            <p className="text-2xl mr-8 text-purplishBlue font-bold phone:text-base">
              {yearly ? `+$${totalCost}/yr` : `+$${totalCost}/mo`}
            </p>
          </div>
        </div>

        <div className="w-full justify-between flex phone:fixed phone:bottom-0 phone:right-0 phone:bg-white phone:p-4">
          <button
            className="text-coolGray font-bold w-28 h-12 rounded-lg"
            onClick={() => setActiveStep(3)}
          >
            Go Back
          </button>
          <button
            className="bg-purplishBlue font-bold text-white w-28 h-12 rounded-lg"
            onClick={() => setActiveStep(5)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
