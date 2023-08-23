import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}
