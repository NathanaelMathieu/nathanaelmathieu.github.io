import "./Projects.scss";
import React, { Component } from "react";
import { ImageCard } from "../components/";
import b3 from "../resources/projects/basinski/b3.jpg";
import contact from "../resources/projects/template/contact.png";
import cubeIso1 from "../resources/projects/cube/iso1.jpg";
import final from "../resources/projects/hopper/final.jpg";
import kids from "../resources/projects/marble/kids.png";
import login from "../resources/projects/tempist/login.png";
import multi from "../resources/projects/pacman/multi.gif";
import side from "../resources/projects/tag/side.jpg";


function Projects() {
  return (
    <div className="Projects">
      <ImageCard route="template" image={contact}
        textEnabled clickable alt="Click to visit my Cube project page"
        text="IDEAS Portfolio Template | Spring 2020"/>
      <ImageCard route="basinski" image={b3} classname="alt-text-color"
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Basinski | Fall 2019"/>
      <ImageCard image={cubeIso1} route="cube"
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Cube | Fall 2019"/>
      <ImageCard route="pacman" image={multi} classname="alt-text-color"
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Pacman Project | Fall 2019" />
        <ImageCard route="tempist" image={login}
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Tempist | Spring 2019" />
      <ImageCard route="hopper" image={final}
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Hopper | Fall 2018"/>
      <ImageCard route="marble" image={kids}
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Marble Run | Fall 2018"/>
      <ImageCard route="tag" image={side}
        textEnabled clickable alt="Click to visit my Cube project page"
        text="Robot Tag | Spring 2018"/>
    </div>
  );
}

export default Projects;
