import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/images/img-error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 w-full h-screen bg-white">
      <img src={ErrorImg} alt="" />
      <div className="text-center text-purple-400 text-4xl font-extrabold">
        404
      </div>
      <h1 className="mt-2 text-center text-4xl font-bold">Page not found</h1>
      <Link to="/" className="mt-7 hover:text-purple-400">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
