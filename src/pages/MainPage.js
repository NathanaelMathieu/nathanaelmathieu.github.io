import "./About.scss";
import { ImageCard, Layout, Text } from "../components/";
import React, { Component } from "react";
import { aboutMeText } from "./Text/aboutText.js";
import professionalPhoto from "../resources/ProfessionalPhoto.JPG";

export default class MainPage extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
        <div className="About">
            <div className="profile_picture">
                <ImageCard alt="My professional photo"
                size="square" image={professionalPhoto}/>
            </div>
            <div className="profile_text">
                <Text class="heading" text="Nathanael Mathieu"/>
                {aboutMeText}
            </div>
        </div>
    );
  }
}
