import "./Marble.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { clips, funnel, funnelGif, kids, track }
 from "../../resources/projects/marble";
import { t1, t2, t3, t4, t5, t6 } from "./Text/marbleText.js";

export default class Marble extends Component {
  componentDidMount() {
    document.title = "Marble Run | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Marble">
          <div className="image_text">
            <ImageCard alt="Students from Renbrook Elementary School trying the marble run"
              size="4x6" image={kids}
              textEnabled text="Students from Renbrook Elementary School trying the marble run"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="A video of the funnel simulation, where a marble swings around before falling through the hole"
              size="4x6" image={funnelGif}
              textEnabled text="The Solidworks Motion study"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="Three prototype clips for the marble run track"
              size="4x6" image={clips}
              textEnabled text="Three prototype clips for the marble run track"/>
            {t3}
          </div>
        </div>
      </Layout>
    );
  }
}
