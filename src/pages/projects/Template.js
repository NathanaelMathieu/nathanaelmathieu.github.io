import "./Template.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { aboutMockup, contact, contactMockup, projects }
 from "../../resources/projects/template/";
import { t1, t2, t3, t4 } from "./Text/templateText.js";

export default class Template extends Component {
  componentDidMount() {
    document.title = "IDEAS Portfolio Template | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Template">
          <div className="image_text">
            <ImageCard alt="The Projects page from the portfolio template"
              size="4x6" image={projects}
              textEnabled text="The template's project page, setup to demonstrate the ImageCard component"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="A wireframe mockup of the Contact page"
              size="4x6" image={contactMockup}
              textEnabled text="This was originally designed as an About Me page"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="The current Contact page"
              size="4x6" image={contact}
              textEnabled text="The template's Contact page, a near perfect direct translation of the wireframe"/>
            {t3}
          </div>
          <div className="image_text">
            <ImageCard alt="A wireframe of the About Me page, slightly different from the current one"
              size="4x6" image={aboutMockup}
              textEnabled text="This wireframe was used, but the contact buttons were removed and a header was added over the main text"/>
            {t4}
          </div>
        </div>
      </Layout>
    );
  }
}
