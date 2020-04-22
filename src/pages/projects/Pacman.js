import "./Pacman.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";

/*
 * Import { }
 *  from "../../resources/projects/pacman";
 */
import { t1, t2, t3, t4, t5, t6 } from "./Text/pacmanText.js";

export default class Cube extends Component {
  componentDidMount() {
    document.title = "Pacman | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Pacman">
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
