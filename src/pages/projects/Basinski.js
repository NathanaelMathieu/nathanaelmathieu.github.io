import "./Basinski.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { b1, b2, b3, b4 } from "../../resources/projects/basinski";

import { t1, t2, t3, t4 } from "./Text/basinskiText.js";

export default class Basinski extends Component {
  componentDidMount() {
    document.title = "Basinski | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Basinski">
          <div className="image_text">
            <ImageCard alt="A yellow and red sunset in front of some bushes"
              size="4x6" image={b1}
              textEnabled text="Only the sunset can be seen"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="The sunset again, but a person's outline is just visible"
              size="4x6"image={b2}
              textEnabled text="My silhouette is barely visible"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="The sunset but my silhouette is plainly in frame"
              size="4x6"image={b3}
              textEnabled text="The webcam is plainly visible now"/>
            {t3}
          </div>
          <div className="image_text">
            <ImageCard alt="The entire image is black except for the burnt red sun that illuminates my face"
              size="4x6"image={b4}
              textEnabled text="A frame near the end of the piece. The sunset is burnt away"/>
            {t4}
          </div>
        </div>
      </Layout>
    );
  }
}
