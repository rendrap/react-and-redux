import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <h1>Oops! Page not found</h1>
    <p className="d-inline">
      Do you want to return <Link to="/" >Home</Link> ?</p>
  </div>
);

export default PageNotFound;