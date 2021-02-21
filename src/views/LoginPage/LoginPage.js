import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";
import { ReactComponent as ShowPasswordIcon } from "../../assets/icons/ico-eye.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { setToken } from "../../utils/AuthServices/AuthServices";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/http://workly.mikovsky-cloud.com/api/auth/login",
      {
        email: email,
        password: password,
      }
    );

    const data = response.data;
    setToken(data.token);
    if (response.status === 200) {
      props.history.push("/");
    }
  };

  return (
    <main className="grid grid-cols-12 items-center py-10 min-h-screen bg-gray-100">
      <div className="col-span-4 col-start-5">
        <div className="px-5 py-10 dark:bg-gray-700 bg-white rounded shadow-2xl">
          <WorklySygnet className="block mb-10 mx-auto" />
          <div className="relative flex justify-center mb-10 mt-4">
            <Link to="/register" className="mr-10 text-gray-400 text-xl">
              Register
            </Link>
            <span className="absolute left-1/2 top-2/4 w-px h-6 bg-gray-400 transform -translate-y-2/4" />
            <Link to="/login" className="ml-10 text-yellow-400 text-xl">
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
