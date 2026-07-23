import React, { createContext } from "react";
import data from "../data/data.json";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser] = React.useState(data.currentUser);

  return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};
