import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="login-container">
        //Used to render the LoginForm Component//
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
