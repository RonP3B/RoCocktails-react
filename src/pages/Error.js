import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2 className="error__title">oops! it's a dead end</h2>
      <Link to="/" className="error__btn">
        back home
      </Link>
    </div>
  );
};

export default Error;
