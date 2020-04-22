import "./Hopper.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { final, finalExt, holder, pendulums } from "../../resources/projects/hopper";
import { t1, t2, t3, t4, t5, t6 } from "./Text/hopperText.js";

export default class Hopper extends Component {
  componentDidMount() {
    document.title = "Hopper | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Hopper">
          <div className="image_text">
            <ImageCard alt="Eight pendulum prototypes on a cream colored table"
              size="4x6" image={pendulums}
              textEnabled text="Eight failed prototypes"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="The final hopper in compressed form, pendulum in motion"
              size="4x6" image={final}
              textEnabled text="The final hopper in compressed form, pendulum in motion"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="The final hopper in extended form, with the rod pointing up towards the camera"
              size="4x6" image={finalExt}
              textEnabled text="The final hopper in extended form"/>
            {t3}
          </div>
        </div>
      </Layout>
    );
  }
}
