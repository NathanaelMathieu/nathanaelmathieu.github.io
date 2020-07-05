import "./Header.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export default class Header extends Component {
  render() {
    return (
      <MediaQuery maxDeviceWidth={600}>
        <div className="Header">
          <Link to="/">
            {"< Back"}
          </Link>
        </div>
      </MediaQuery>
    );
  }
}
