import React from "react";

import "./login-page.scss";

const LoginPage = () => {
  return (
    <main className="login-page">
      <div className="login-page__login-container login-container">
        <h1 className="login-container__title">Log in</h1>
        <button className="btn--green">Use Google Account</button>
        <span className="login-container__divider"></span>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
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
