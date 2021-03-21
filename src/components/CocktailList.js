import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <section className="cocktails">
        <h2 className="cocktails__title">no jayé bi</h2>
      </section>
    );
  }

  return (
    <section className="cocktails">
      <h2 className="cocktails__title">cocktails</h2>
      <div className="cocktails__wrapper">
        {cocktails.drinks.map((cocktail) => {
          return <Cocktail {...cocktail} key={cocktail.idDrink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
