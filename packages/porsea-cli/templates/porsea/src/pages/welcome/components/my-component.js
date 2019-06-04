import React, { Component } from "react";
import Cashfazz from "Components/cashfazz";
import "Styles/welcome.scss";
import logo from "Assets/images/fazz-logo.png";

class MyComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/welcome/components/my-component.js</code> and
            save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Cashfazz />
        </header>
      </div>
    );
  }
}

export default MyComponent;
