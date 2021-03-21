import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refInput = useRef();

  useEffect(() => {
    focusInput();
  }, []);

  const focusInput = () => {
    refInput.current.focus();
  };

  const searchCocktail = () => {
    setSearchTerm(refInput.current.value);
  };

  return (
    <section className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search__container">
          <label className="search__label">search your favorite cocktail</label>
          <input
            type="text"
            className="search__input"
            ref={refInput}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
