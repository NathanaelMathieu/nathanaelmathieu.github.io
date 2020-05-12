import "./Header.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Text } from "./";

export default class Header extends Component {
  render() {
    return (
      <MediaQuery maxDeviceWidth={600}>
        <div className="Header">
          <Link to="/">
            <Text text="< Back" class="heading transparent-theme"/>
          </Link>
        </div>
      </MediaQuery>
    );
  }
}
