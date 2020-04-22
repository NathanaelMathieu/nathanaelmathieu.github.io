import "./Cube.scss";
import { ImageCard, Layout } from "../../components/";
import React, { Component } from "react";
import { brick, hall, iso1, iso4, lights, side1 }
 from "../../resources/projects/cube/";
import { t1, t2, t3, t4, t5, t6 } from "./Text/cubeText.js";

export default class Cube extends Component {
  componentDidMount() {
    document.title = "The Cube | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Cube">
          <div className="image_text">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6" image={iso1}
              textEnabled text="An isometric view of the Cube"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="Lights, viewed through the portals of the Cube"
              size="4x6" image={lights}
              textEnabled text="Lights, viewed through the portals of the Cube"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="A top down view of the Cube, with the inner hex of blue visible"
              size="4x6" image={iso4}
              textEnabled text="The Cube features a grid pattern broken by hexagonal portals of green, yellow, and blue, each color descending into the interior"/>
            {t3}
          </div>
          <div className="image_text">
            <ImageCard alt="A view of a side of the Cube with four portals"
              size="4x6" image={side1}
              textEnabled text="The inner space of the Cube is visible but quite dark as the walls block most of the light"/>
            {t4}
          </div>
          <div className="image_text">
            <ImageCard alt="A view down a hallway through the portals of the Cube"
              size="4x6" image={hall}
              textEnabled text="Looking down a hallway"/>
            {t5}
          </div>
          <div className="image_text">
            <ImageCard alt="A brick wall seen through the portals of the Cube"
              size="4x6" image={brick}
              textEnabled text="An exterior brick wall"/>
            {t6}
          </div>
        </div>
      </Layout>
    );
  }
}
