import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1> Página no encontrada :( </h1>
      <h3>
        Ir a la página <Link to="/"> Principal </Link>
      </h3>
    </div>
  );
}

export default PageNotFound;