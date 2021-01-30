import React, { useState } from "react";
import "./register-page.scss";
import axios from "axios";
import { Link } from "react-router-dom";

import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";
import { ReactComponent as ShowPasswordIcon } from "../../assets/icons/ico-eye.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [undefinedError, setUndefinedError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,64}$/; //8-64 signs, at least one number, one lowercase, one uppercase, no spaces
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsSubmit(true);

    let isFormValid = true;

    if (!email.match(emailValidation)) {
      setSuccesMessage("");
      setErrorMessage("Email is invalid");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (!password.match(passwordValidation)) {
      setSuccesMessage("");
      setErrorMessage("Password doesn't meet the requirements");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (password !== confirmPassword) {
      setSuccesMessage("");
      setErrorMessage("Passwords don't match");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (isFormValid) {
      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://workly-api.herokuapp.com/auth/register",
        {
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: password,
        }
      );
      if (response.status === 201) {
        console.log("true");
        setSuccesMessage("Your account has been created successfully");
        setErrorMessage("");
        setIsSubmit(false);
      } else {
        setUndefinedError("An unexpected error has occurred. Try again later.");
      }
    }
  };

  return (
    <main className="grid grid-cols-12 items-center min-h-screen py-10 bg-gray-100">
      <div className="col-start-5 col-span-4">
        <div className="rounded bg-white dark:bg-gray-700 shadow-2xl py-10 px-5">
          <WorklySygnet className="mx-auto mb-10 block" />
          <div className="flex justify-center relative mb-10 mt-4">
            <Link to="/register" className="text-yellow-400 text-xl mr-10">
              Register
            </Link>
            <span className="h-6 w-px absolute left-1/2 top-2/4 transform -translate-y-2/4 bg-gray-400" />
            <Link to="/login" className="text-gray-400 text-xl ml-10">
              Login
            </Link>
          </div>
          <form onSubmit={registerSubmit}>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <div className="input-group flex flex-col mb-5">
                  <label htmlFor="first-name" className="text-sm mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required="required"
                  />
                </div>
              </div>
              <div>
                {" "}
                <div className="input-group flex flex-col mb-5">
                  <label htmlFor="last-name" className="text-sm mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Kowalsky"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="input-group flex flex-col mb-5">
              <label htmlFor="email" className="text-sm mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>
            <div className="input-group flex flex-col mb-1 relative">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <Input
                type={`${showPassword === true ? "text" : "password"}`}
                name="password"
                id="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              />
              <button
                onClick={(e) => setShowPassword(!showPassword)}
                className={`show-password absolute top-2/4 right-3 ${
                  showPassword === true ? "active" : ""
                }`}
              >
                <ShowPasswordIcon />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-5">
              Password must be between 8 to 64 characters which contain at least
              one number, one uppercase and one lowercase letter. Also can't
              contain spaces.
            </p>
            <div className="input-group flex flex-col mb-5">
              <label htmlFor="confirm-password" className="text-sm mb-2">
                Confirm password
              </label>
              <Input
                type={`${showPassword === true ? "text" : "password"}`}
                name="confirm-password"
                id="confirm-password"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required="required"
              />
            </div>
            <Button
              type="submit"
              bgColor="green-200"
              className="text-center rounded-md py-3 px-10 text-lg hover:bg-transparent hover:bg-green-300"
            >
              {isSubmit === false ? "Register" : "Submiting..."}
            </Button>
            <div
              className={`text-center rounder-md ${
                succesMessage !== ""
                  ? "py-4 px-2 mt-5 border border-solid bg-green-100 text-green-800 border-green-400"
                  : ""
              } ${
                errorMessage !== "" || undefinedError !== ""
                  ? "py-4 px-2 mt-5 border border-solid bg-red-100 text-red-800 border-red-400"
                  : ""
              } `}
            >
              {succesMessage}
              {undefinedError}
              {errorMessage}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
