import React from "react";
import { useLocation } from "react-router-dom";

import "./404.css";

const PageNotFound = () => {
  const location = useLocation();

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <span>Nothing at vatriu.me{location.pathname}</span>
    </div>
  );
};

export default PageNotFound;
