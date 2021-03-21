import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getCocktail(url) {
      try {
        const response = await fetch(url + id);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink,
            strDrinkThumb,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            category: strCategory,
            glass: strGlass,
            instructions: strInstructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail(url);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <section className="cocktail">
        <Link to="/" className="cocktail__btn btn">
          back home
        </Link>
        <h2 className="cocktail__title">no cocktail to display</h2>
      </section>
    );
  }

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="cocktail">
      <Link to="/" className="cocktail__btn btn">
        back home
      </Link>
      <h2 className="cocktail__title">{name}</h2>
      <article className="cocktail__info">
        <picture className="cocktail__image">
          <img src={image} alt={name} />
        </picture>
        <div className="cocktail__drink">
          <p>
            <span className="cocktail__drink__data">name : </span>
            {name}
          </p>
          <p>
            <span className="cocktail__drink__data">category : </span>
            {category}
          </p>
          <p>
            <span className="cocktail__drink__data">info : </span>
            {info}
          </p>
          <p>
            <span className="cocktail__drink__data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="cocktail__drink__data">instructions : </span>
            {instructions}
          </p>
          <p>
            <span className="cocktail__drink__data">ingredients : </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}
          </p>
        </div>
      </article>
    </section>
  );
};

export default SingleCocktail;
