import React from "react";
import Info from "./Info";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

export default function Entries({ activeStep, setActiveStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(2);
  };

  switch (activeStep) {
    case 1:
      return <Info handleSubmit={handleSubmit} />;

    case 2:
      return <SelectPlan setActiveStep={setActiveStep} />;

    case 3:
      return <Addons setActiveStep={setActiveStep} />;

    case 4:
      return <Summary setActiveStep={setActiveStep} />;

    case 5:
      return <ThankYou />;
  }
}
