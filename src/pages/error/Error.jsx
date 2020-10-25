//404 error page
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="error-component">
      <h1 className="error-component--title">404 Error Page</h1>
      <p className="error-component--text">Sorry, This page doesn't exist</p>
      <Link to="/" className="error-component--link">Go Back</Link>
    </div>
  );
}

export default Error;