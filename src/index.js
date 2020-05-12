import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Basinski, Cube, Pacman, Tempist, Template }
  from "./pages/projects/";
import { MainPage, NotFound } from "./pages";
import { Redirect, Route, BrowserRouter as Router, Switch }
  from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


const routing =
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/basinski" component={Basinski} />
      <Route exact path="/cube" component={Cube} />
      <Route exact path="/pacman" component={Pacman} />
      <Route exact path="/tempist" component={Tempist} />
      <Route exact path="/template" component={Template} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
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
