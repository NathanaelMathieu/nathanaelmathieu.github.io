import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { About, Contact } from "./pages/";
import { Basinski, Cube, Hopper, Marble, Pacman, Tag, Tempist, Template }
  from "./pages/projects/";
import { NotFound, Projects } from "./pages";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


const routing =
  <Router>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/basinski" component={Basinski} />
      <Route exact path="/projects/cube" component={Cube} />
      <Route exact path="/projects/hopper" component={Hopper} />
      <Route exact path="/projects/marble" component={Marble} />
      <Route exact path="/projects/pacman" component={Pacman} />
      <Route exact path="/projects/tag" component={Tag} />
      <Route exact path="/projects/tempist" component={Tempist} />
      <Route exact path="/projects/template" component={Template} />
      <Route component={NotFound} />
    </Switch>
  </Router>;

ReactDOM.render(
routing,
document.getElementById("root")
);

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
