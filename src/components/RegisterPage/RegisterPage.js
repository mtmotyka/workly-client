import React, { useState } from "react";
import "./register-page.scss";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,64}$/; //8-64 signs, at least one number, one lowercase, one uppercase, no spaces
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsSubmit(true);

    if (email.match(emailValidation)) {
      if (password.match(passwordValidation)) {
        if (password !== confirmPassword) {
          setSuccesMessage("");
          setErrorMessage("Passwords don't match");
          setIsSubmit(false);
        } else {
          const response = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://workly-api.herokuapp.com/auth/register",
            {
              email: email,
              password: password,
            }
          );
          const data = response.data;
          console.log(data);
          setSuccesMessage("Your account has been created successfully");
          setErrorMessage("");
          setEmailErrorMessage("");
          setIsSubmit(false);
        }
      } else {
        setSuccesMessage("");
        setErrorMessage("Password doesn't meet the requirements");
        setIsSubmit(false);
      }
    } else {
      setSuccesMessage("");
      setEmailErrorMessage("Email is invalid");
      setIsSubmit(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-page__register-container register-container">
        <h1 className="register-container__title">Register</h1>
        <form onSubmit={registerSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className={`${emailErrorMessage !== "" ? "error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="error-message">{emailErrorMessage}</p>
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              className={`${errorMessage !== "" ? "error" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="small-info">
              Password must be between 8 to 64 characters which contain at least
              one number, one uppercase and one lowercase letter. Also can't
              contain spaces.
            </p>
          </div>
          <div className="input-group">
            <label htmlFor="email">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className={`${errorMessage !== "" ? "error" : ""}`}
              placeholder="*********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <p className="error-message">{errorMessage}</p>
          </div>
          <button type="submit" className="btn--green">
            {isSubmit === false ? "Register" : "Submiting..."}
          </button>
          <p className="success-message">{succesMessage}</p>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
