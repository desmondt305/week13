import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
