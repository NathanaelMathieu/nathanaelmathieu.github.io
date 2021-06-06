import "./MainPage.scss";
import { IconButtons, Text } from "../components/";
import React, { Component } from "react";
import { Projects } from "./";

const intro =
  `Computer Science Analyst with PTC's Rotational Leadership Development Program`;

export default class MainPage extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
      <div className="MainPage">
        <div id="about">
          <div id="contact">
            <Text class="heading transparent-theme" text="Nathanael Mathieu"/>
            <Text class="small transparent-theme" text={intro}/>
            <IconButtons/>
          </div>
        </div>
        <div id="projects">
          <Text class="heading transparent-theme" text = "Projects"/>
          <Projects/>
        </div>
      </div>
  );
  }
}
