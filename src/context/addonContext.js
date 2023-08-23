import React, { createContext, useContext, useState } from "react";

const AddonContext = createContext(null);

export default function AddonContextProvider({ children }) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  return (
    <AddonContext.Provider
      value={{
        selectedAddons,
        setSelectedAddons,
      }}
    >
      {children}
    </AddonContext.Provider>
  );
}

export function useAddonsContext() {
  const context = useContext(AddonContext);
  return context;
}
