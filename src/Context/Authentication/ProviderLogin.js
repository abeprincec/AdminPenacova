import React from "react";
import useStorage from "../Authentication/Hooks/UseStorage";
import Context from "./ContextLogin";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  return <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>;
};

export default AuthProvider;
