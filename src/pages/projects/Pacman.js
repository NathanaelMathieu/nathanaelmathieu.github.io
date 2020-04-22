import "./Pacman.scss";
import { ImageCard, Layout } from "../../components";
import React, { Component } from "react";
import { multi, reinforcement, search, tracking }
 from "../../resources/projects/pacman";
import { t1, t2, t3, t4 } from "./Text/pacmanText.js";

export default class Cube extends Component {
  componentDidMount() {
    document.title = "Pacman | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Pacman">
          <div className="image_text">
            <ImageCard alt="Pacman on a maze, going towards a food pellet"
              image={search}
              textEnabled text="Pacman used DFS to find the path to the food pellet, and is now following that path"/>
            {t1}
          </div>
          <div className="image_text">
            <ImageCard alt="Pacman is eating all the pellets in this ghost-free maze"
              image={multi}
              textEnabled text="The score is the pellets eaten minus time elapsed with a bonus for eating all the pellets"/>
            {t2}
          </div>
          <div className="image_text">
            <ImageCard alt="Pacman is trying to stay away from two ghosts, and shaded tiles represent negative reward states"
               image={reinforcement}
              textEnabled text="The shaded tiles are reward values for those states. In this case, they are all negative"/>
            {t3}
          </div>
          <div className="image_text">
            <ImageCard alt="Pacman is rushing to eat a blue ghost in a big open rectangle room with shaded tiles representing particles"
               image={tracking}
              textEnabled text="The shaded tiles are particles for those states"/>
            {t4}
          </div>
        </div>
      </Layout>
    );
  }
}
