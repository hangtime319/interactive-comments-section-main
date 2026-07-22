import React, { createContext } from "react";
import data from "../data/data.json";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    setCurrentUser(data.currentUser);
  }, []);

  return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};
