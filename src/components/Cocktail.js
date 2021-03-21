import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  idDrink,
  strDrink,
  strDrinkThumb,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <section className="cocktails__single-cocktail">
      <picture className="cocktails__img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </picture>
      <div className="cocktails__footer">
        <h2>{strDrink}</h2>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="cocktails__btn btn">
          details
        </Link>
      </div>
    </section>
  );
};

export default Cocktail;
