import React, { Component } from "react";
import "./detail.css";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Detail extends Component {
  render() {
    return (
      <div className="detail-App">
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ backgroundColor: "#e5e6e8" }}
          >
            Basic Details
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{ padding: "10px", display: "inline-block", width: "100%" }}
          >
            <div className="field">
              <div className="label">Name : </div>
              <div className="data">{this.props.user.name}</div>
            </div>
            <br />
            <div className="field">
              <div className="label">Phone : </div>
              <div className="data">{this.props.user.phone}</div>
            </div>
            <br />
            <div className="field">
              <div className="label">Email : </div>
              <div className="data">{this.props.user.email}</div>
            </div>
            <br />
            <div className="field">
              <div className="label">Website : </div>
              <div className="data">{this.props.user.website}</div>
            </div>
            <br />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Detail;
