import React, { useState } from "react";
import "./register-page.scss";
import axios from "axios";
import { Link } from "react-router-dom";

import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
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
          name: name,
          surname: surname,
          email: email,
          password: password,
        }
      );
      if (response.status === 201) {
        setSuccesMessage("Your account has been created successfully");
        setErrorMessage("");
        setIsSubmit(false);
      } else {
        setUndefinedError("An unexpected error has occurred. Try again later.");
      }
    }
  };

  return (
    <main className="register-page">
      <div className="register-page__register-container register-container">
        <WorklySygnet className="register-container__logo" />
        <div className="switch register-container__switch">
          <Link to="/register" className="switch__link btn--link active">
            Register
          </Link>
          <span className="switch__divider" />
          <Link to="/login" className="switch__link btn--link">
            Login
          </Link>
        </div>
        <form onSubmit={registerSubmit}>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-group">
                <label htmlFor="email">Name</label>
                <input
                  type="email"
                  name="text"
                  id="name"
                  placeholder="John"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-group">
                <label htmlFor="email">Name</label>
                <input
                  name="text"
                  id="surname"
                  placeholder="Kowalsky"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input
              type={`${showPassword === true ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={(e) => setShowPassword(!showPassword)}
              className={`show-password ${
                showPassword === true ? "active" : ""
              }`}
            />
          </div>
          <p className="small-info">
            Password must be between 8 to 64 characters which contain at least
            one number, one uppercase and one lowercase letter. Also can't
            contain spaces.
          </p>
          <div className="input-group">
            <label htmlFor="email">Confirm password</label>
            <input
              type={`${showPassword === true ? "text" : "password"}`}
              name="confirm-password"
              id="confirm-password"
              placeholder="*********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn--green">
            {isSubmit === false ? "Register" : "Submiting..."}
          </button>
          <div
            className={`error-message ${
              succesMessage !== "" ? "error-message--green" : ""
            } ${
              errorMessage !== "" || undefinedError !== ""
                ? "error-message--red"
                : ""
            } `}
          >
            {succesMessage}
            {undefinedError}
            {errorMessage}
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
