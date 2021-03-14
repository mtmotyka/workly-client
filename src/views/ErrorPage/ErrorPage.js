import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/images/img-error.png";
import { ThemeProvider } from "../../theme/theme";

const ErrorPage = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center py-5 w-full h-screen bg-secondary">
        <img src={ErrorImg} alt="" />
        <div className="text-center text-purple-main text-4xl font-extrabold">
          404
        </div>
        <h1 className="mt-2 text-center text-primary text-4xl font-bold">
          Page not found
        </h1>
        <Link to="/" className="mt-7 text-primary hover:text-purple-main">
          Back to home page
        </Link>
      </div>
    </ThemeProvider>
  );
};

export default ErrorPage;
