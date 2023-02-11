import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="heading">
        <div className="main-heading">
          <h2 className="logo">Curology</h2>
        </div>
        <div className="main-menu">
          <div>
            <h4>WHY CUROLOGY</h4>
          </div>
          <div>
            <h4>REVIEWS</h4>
          </div>
          <div>
            <h4>COMMUNITY</h4>
          </div>
        </div>
        <div className="action-button">
          <div className="login-button">
            <a>LOGIN</a>
          </div>
          <div className="trial-button">
            <button>
              <b>START TRIAL</b>
            </button>
          </div>
        </div>
      </div>
      <div className="landing">
        <div className="landing-container">
          <div className="landing-logo">
            <div>
              <h1>A custom bottle</h1>
            </div>
            <div>
              <h1>
                for your <b>dark spots -</b>
              </h1>
            </div>
            <div>
              <h1>and no one else's</h1>
            </div>
          </div>
          <div className="landing-stmt">
            <p>Get glowing skin with a powerful cream mixed just for you.</p>
          </div>
          <div className="landing-btn">
            <button>
              <b>UNLOCK YOUR FREE ORDER</b>
            </button>
          </div>
          <div className="landing-stmt-sec">
            <p>30-day trial. Just cover $4.95 in shipping + handling</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
