import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    axios
      .get(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("ctx", res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
