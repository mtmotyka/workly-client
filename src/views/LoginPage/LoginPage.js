import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";
import { ReactComponent as ShowPasswordIcon } from "../../assets/icons/ico-eye.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://workly-api.herokuapp.com/auth/login",
      {
        email: email,
        password: password,
      }
    );

    const data = response.data;
    localStorage.setItem("accesToken", data.accessToken);
  };

  return (
    <main className="grid grid-cols-12 items-center min-h-screen py-10 bg-gray-100">
      <div className="col-start-5 col-span-4">
        <div className="rounded bg-white dark:bg-gray-700 shadow-2xl py-10 px-5">
          <WorklySygnet className="mx-auto mb-10 block" />
          <div className="flex justify-center relative mb-10 mt-4">
            <Link to="/register" className="text-gray-400 text-xl mr-10">
              Register
            </Link>
            <span className="h-6 w-px absolute left-1/2 top-2/4 transform -translate-y-2/4 bg-gray-400" />
            <Link to="/login" className="text-yellow-400 text-xl ml-10">
              Login
            </Link>
          </div>
          <form onSubmit={loginSubmit}>
            <Input
              type="email"
              name="email"
              label="E-mail"
              id="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
            <Input
              type={`${showPassword === true ? "text" : "password"}`}
              name="password"
              id="password"
              label="Password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            >
              <button
                type="button"
                onClick={(e) => setShowPassword(!showPassword)}
                className={`show-password absolute top-2/4 right-3 ${
                  showPassword === true ? "active" : ""
                }`}
              >
                <ShowPasswordIcon />
              </button>
            </Input>
            <Button type="submit" size="sm" color="green">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
