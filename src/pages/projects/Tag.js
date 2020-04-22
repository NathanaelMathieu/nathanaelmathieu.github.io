import "./Tag.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { cageIso, cardboard, side }
  from "../../resources/projects/tag/";
import { t1, t2, t3 } from "./Text/tagText.js";

export default class Tag extends Component {
  componentDidMount() {
    document.title = "Robot Tag | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Tag">
          <div className="image_text">
            <ImageCard alt="The final side of the cage, with mount points and cutouts for wires"
              size="4x6" image={side}
              textEnabled text="One of the final laser cuts of the cage sides"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="An isometric sketch of the Cage"
              size="4x6" image={cageIso}
              textEnabled text="An isometric sketch of the Cage"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="A cardboard and hot glue prototype of the cage"
              size="4x6" image={cardboard}
              textEnabled text="Made with hot glue and cardboard, this initial cage prototype was actually fairly close to the final product"/>
            {t3}
          </div>
        </div>
      </Layout>
    );
  }
}
