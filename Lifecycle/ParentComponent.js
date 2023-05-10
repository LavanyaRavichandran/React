import React, { Component } from "react";
import Component2 from "./Component2";

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      myName: "Lucky",
      show: false,
    };
    console.log("This is constructor");
  }
  static getDerivedStateFromProps() {
    console.log("static getDerived");
    return null;
  }
  updateState(data) {
    this.setState({ myName: data, show: true });
  }
  render() {
    console.log("render");
    return (
      <div>
        ParentComponent
        <button
          onClick={() => {
            this.updateState("Lavanya");
          }}
        >
          Click
        </button>
        {this.state.show == 5 ? <Component2 /> : " "}
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldcomponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "position";
  }
  componentDidUpdate(preProp, preState, snapShot) {
    console.log("component did update");
    console.log(preProp);
    console.log(preState);
    console.log(snapShot);
  }
}
