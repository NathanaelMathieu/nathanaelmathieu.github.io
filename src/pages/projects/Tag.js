import "./Tag.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";

/*
 * Import { }
 *  from "../../resources/projects/tag";
 */
import { t1, t2, t3, t4, t5, t6 } from "./Text/tagText.js";

export default class Tag extends Component {
  componentDidMount() {
    document.title = "Robot Tag | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Tag">
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
