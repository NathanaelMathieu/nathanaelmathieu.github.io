import "./Template.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";

/*
 * Import { }
 *  from "../../resources/projects/template";
 */
import { t1, t2, t3, t4, t5, t6 } from "./Text/templateText.js";

export default class Template extends Component {
  componentDidMount() {
    document.title = "IDEAS Portfolio Template | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Template">
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6"
              textEnabled text="An isometric view of the Cube"/>
            {t1}
          </div>
        </div>
      </Layout>
    );
  }
}
