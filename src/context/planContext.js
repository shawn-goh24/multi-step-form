import React, { createContext, useContext, useState } from "react";
import { plans } from "../utils/data";

const PlanContext = createContext(null);

export default function PlanContextProvider({ children }) {
  const [yearly, setYearly] = useState(false);
  const [activePlan, setActivePlan] = useState(plans[0]);

  return (
    <PlanContext.Provider
      value={{
        yearly,
        setYearly,
        activePlan,
        setActivePlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlanContext() {
  const context = useContext(PlanContext);
  return context;
}
