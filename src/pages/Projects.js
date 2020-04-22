import "./Projects.scss";
import { ImageCard, Layout } from "../components/";
import React, { Component } from "react";
import cubeIso1 from "../resources/projects/cube/iso1.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Projects">
          <ImageCard route="projects/template"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="IDEAS Portfolio Template | Spring 2020"/>
          <ImageCard route="projects/basinski"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Basinski | Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube | Fall 2019"/>
          <ImageCard route="projects/pacman"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Pacman Project | Fall 2019"/>
           <ImageCard route="projects/tempest"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Tempest | Spring 2019"/>
          <ImageCard route="projects/hopper"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Hopper | Fall 2018"/>
          <ImageCard route="projects/marble"
            textEnabled clickable alt="Click to visit my Cube project page"
            text="Marble Run | Fall 2018"/>
          <ImageCard route="projects/tag"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Robot Tag | Spring 2018"/>
        </div>
      </Layout>
    );
  }
}
