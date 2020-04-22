import "./Projects.scss";
import { ImageCard, Layout } from "../components/";
import React, { Component } from "react";
import b3 from "../resources/projects/basinski/b3.jpg";
import contact from "../resources/projects/template/contact.png";
import cubeIso1 from "../resources/projects/cube/iso1.jpg";
import final from "../resources/projects/hopper/final.jpg";
import kids from "../resources/projects/marble/kids.png";
import login from "../resources/projects/tempist/login.png";
import multi from "../resources/projects/pacman/multi.gif";
import side from "../resources/projects/tag/side.jpg";


export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Projects">
          <ImageCard route="projects/template" image={contact}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="IDEAS Portfolio Template | Spring 2020"/>
          <ImageCard route="projects/basinski" image={b3}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Basinski | Fall 2019"/>
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube | Fall 2019"/>
          <ImageCard route="projects/pacman" image={multi}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Pacman Project | Fall 2019" />
           <ImageCard route="projects/tempist" image={login}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Tempist | Spring 2019" />
          <ImageCard route="projects/hopper" image={final}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Hopper | Fall 2018"/>
          <ImageCard route="projects/marble" image={kids}
            textEnabled clickable alt="Click to visit my Cube project page"
            text="Marble Run | Fall 2018"/>
          <ImageCard route="projects/tag" image={side}
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Robot Tag | Spring 2018"/>
        </div>
      </Layout>
    );
  }
}
