import "./MainPage.scss";
import { IconButtons, ImageCard, Text } from "../components/";
import React, { Component } from "react";
import { Projects } from "./";
import { professionalPhoto } from "../resources/";

const intro =
  `Rotational Analyst in PTC's Rotational Leadership Development Program - CS Track. Seeking a Full-Stack Software Developer role at PTC within Onshape. Open to other roles at Kepware and within the Velocity product group.`;

export default class MainPage extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
      <div className="MainPage">
        <div id="about">
          <div id="contact">
            <ImageCard alt="A headshot of Nathanael Mathieu"
              image={professionalPhoto} size="square"/>
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
