import React, { useState } from "react";
import "./login-page.scss";
import axios from "axios";

const LoginPage = () => {
  const [accesToken, setAccesToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://workly-api.herokuapp.com/auth/login",
      {
        data: {
          email: "adminAccount@workly.io",
          password: "worklyPassword123",
        },
      }
    );
    console.log(response);
  };

  return (
    <main className="login-page">
      <div className="login-page__login-container login-container">
        <h1 className="login-container__title">Log in</h1>
        <button className="btn--green">Use Google Account</button>
        <span className="login-container__divider"></span>
        <form onSubmit={loginSubmit}>
          <div className="input-wrapper">
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
          <div className="input-wrapper">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn--green">
            Log in
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
