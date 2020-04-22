import "./Tempist.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { gantt, login } from "../../resources/projects/tempist/";
import { t1, t2 } from "./Text/tempistText.js";

export default class Tempest extends Component {
  componentDidMount() {
    document.title = "Tempist | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Tempist">
          <div className="image_text">
            <ImageCard alt="The login page for Tempist"
              size="4x6" image={login}
              textEnabled text="The login page for Tempist"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="The Gantt Chart view of tasks on the page"
              size="4x6" image={gantt}
              textEnabled text="The Gantt Chart of tasks was one of my biggest contributions to the project"/>
            {t2}
          </div>
        </div>
      </Layout>
    );
  }
}
