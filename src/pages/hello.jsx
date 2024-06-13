import React from "react";
import { createContext } from "react";
import { useState } from "react";
import MyComponent from "../component/MyComponent.jsx";

export const dataContext = createContext();

export const Hello = () => {
  const [data, setData] = useState({
    name: "OKRAFALDINO",
    description: "Ini deskripsi",
  });

  return (
    <dataContext.Provider value={{ data, setData }}>
      <MyComponent />
    </dataContext.Provider>
  );
};

export default Hello;
