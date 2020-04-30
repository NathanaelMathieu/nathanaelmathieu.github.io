import "./MainPage.scss";
import { IconButtons, Layout, Text } from "../components/";
import React, { Component } from "react";
import { aboutMeText } from "./Text/aboutText.js";
import professionalPhoto from "../resources/ProfessionalPhoto.JPG";

const intro =
  `My name is Nate and I use he/him pronouns. I am a Computer Science Major and Integrated Design, Engineering, and Applied Sciences Minor in the Class of 2020 at Wesleyan University. I am looking for an Entry-Level Python Full Stack Software Engineering Job.`;

export default class MainPage extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
        <div className="MainPage">
          <div id="about">
            <div id="contact">
              <Text class="heading neumorphic" text="Nathanael Mathieu"/>
              <Text class="small neumorphic" text={intro}/>
              <IconButtons/>
            </div>
          </div>
        </div>
  );
  }
}
