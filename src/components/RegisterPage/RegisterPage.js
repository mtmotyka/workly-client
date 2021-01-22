import React, { useState } from "react";
import "./register-page.scss";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    //TODO: Empty email validation
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords don't match");
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
      }
    } else {
      setErrorMessage("Password cannot be empty");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              className={`${errorMessage === true ? "error" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className={`${errorMessage === true ? "error" : ""}`}
              placeholder="*********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error-message">{errorMessage}</p>
          </div>
          <button type="submit" className="btn--green">
            Register
          </button>
          <p className="success-message">{succesMessage}</p>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
