import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { AiFillEye } from "react-icons/ai";

import { BACKEND_URL } from "../../config";
import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { isLoggedIn, setToken } from "../../utils/AuthServices/AuthServices";
import { ThemeProvider } from "../../theme/theme";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(BACKEND_URL + "/api/auth/login", {
        email: email,
        password: password,
      });

      const data = response.data;
      setToken(data.token);
      if (response.status === 200) {
        isLoggedIn();
        props.history.push("/");
      }
    } catch (err) {
      toast.error("The email or password provided is incorrect");
    }
  };

  return (
    <ThemeProvider>
      {" "}
      <main className="relative grid grid-cols-12 items-center py-10 min-h-screen bg-secondary">
        <DarkModeToggle className="absolute right-0 top-0" />
        <ToastContainer />
        <div className="col-span-4 col-start-5">
          <div className="px-5 py-10 dark:bg-gray-700 bg-primary rounded shadow-2xl">
            <WorklySygnet className="block mb-10 mx-auto" />
            <div className="relative flex justify-center mb-10 mt-4">
              <Link to="/register" className="mr-10 text-secondary text-xl">
                Register
              </Link>
              <span className="absolute left-1/2 top-2/4 w-px h-6 bg-gray-400 transform -translate-y-2/4" />
              <Link to="/login" className="ml-10 text-purple-main text-xl">
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
                  <AiFillEye size="1.6em" style={{ color: "gray" }} />
                </button>
              </Input>
              <Button type="submit" size="sm" color="green">
                Log in
              </Button>
            </form>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default LoginPage;
