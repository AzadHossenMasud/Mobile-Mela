import React from "react";
import { useRouteError } from "react-router-dom";
import errorimg  from  '../../../assets/images/404-error-page-not-found.jpg'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${errorimg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-xl text-red-700">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
