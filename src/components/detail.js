import React, { Component } from "react";
import "./detail.css";

class Detail extends Component {
  render() {
    return <div className="App">{this.props.user.name}</div>;
  }
}

export default Detail;
