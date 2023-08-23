import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Entries from "./components/Entries";
import UserContextProvider from "./context/userContext";
import PlanContextProvider from "./context/planContext";
import AddonContextProvider from "./context/addonContext";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="font-ubuntu flex p-4 h-screen space-x-4 phone:flex-col phone:p-0 phone:bg-lightBlue phone:space-x-0 phone:items-center phone:relative">
      <SideBar activeStep={activeStep} />
      <UserContextProvider>
        <AddonContextProvider>
          <PlanContextProvider>
            <Entries activeStep={activeStep} setActiveStep={setActiveStep} />
          </PlanContextProvider>
        </AddonContextProvider>
      </UserContextProvider>
    </main>
  );
}

export default App;
