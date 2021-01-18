import React, { useState } from "react";
import "./login-page.scss";
import axios from "axios";

const LoginPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
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
        <p>Access Token: {accessToken}</p>
        <p>Refresh Token: {refreshToken}</p>
      </div>
    </main>
  );
};

export default LoginPage;
