import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");

  const getData = useCallback(
    async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url + searchTerm);
        const cocktails = await response.json();
        const { drinks } = cocktails;
        if (drinks) {
          setCocktails(cocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    [searchTerm]
  );

  useEffect(() => {
    getData(url);
  }, [searchTerm, getData]);

  return (
    <AppContext.Provider value={{ cocktails, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
