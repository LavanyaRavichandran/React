import React, { Component } from "react";

export default class Component2 extends Component {
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return <div>Component2</div>;
  }
}
