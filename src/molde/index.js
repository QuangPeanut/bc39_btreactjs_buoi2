import React, { Component } from "react";
import Background from "./background";
import People from "./people";
import Glasses from "./glasses";

export default class Molde extends Component {
  render() {
    return (
      <div>
        <Background />
        <People />
        <Glasses />
      </div>
    );
  }
}
