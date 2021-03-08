import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="jumbotron">
    <h1>Admin Page</h1>
    <p>React {React.version} + Redux Router </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
)

export default Homepage;