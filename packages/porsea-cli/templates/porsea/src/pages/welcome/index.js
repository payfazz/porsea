import React, { Component } from "react";
import MyComponent from "./components/my-component";
import withNavigationOptions from "porsea/lib/hoc/with-navigation-options";

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

export default withNavigationOptions({ path: "/welcome" })(WelcomePage);
