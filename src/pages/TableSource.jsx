import React, { createContext, useEffect, useState } from "react";
import Information from "./information.jsx";
import { api } from "../component/Url.jsx";

export const dataContext = createContext();

const TableSource = () => {
  const [data, setData] = useState({
    name: "Pandu",
    description: "ABCDEFGHIJ",
  });
  // const [description, setDescription] = useState("ABCDEFGHIJ");
  // const name = "Pandu";
  // const description = "ABCDEFGHIJ";
  const [pokemons, setPokemons] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        api
          .get("/pokemon/")
          .then((response) => {
            const results = response.data.results;
            console.log(response);
            setPokemons(results);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <dataContext.Provider value={{ data, setData, pokemons }}>
          <Information />
        </dataContext.Provider>
      )}
    </>
  );
};

export default TableSource;
