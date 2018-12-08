import React, { Component } from "react";
import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Master from "./components/master";
import Detail from "./components/detail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  selectedUser = user => {
    this.setState({ user: user });
  };

  render() {
    return (
      <div className="App">
        <div className="usr-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                React Master Detail
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="usr-content">
          <div className="m-div">
            <Master user={this.selectedUser} />
          </div>
          <div className="d-div">
            <Detail user={this.state.user} />
          </div>
        </div>
        <div className="usr-footer">footer</div>
      </div>
    );
  }
}

export default App;
