import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [userData, setUserData] = useState(null);

  // console.log("userData", userData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// custom user hook
export function useUserContext() {
  return useContext(UserContext);
}
