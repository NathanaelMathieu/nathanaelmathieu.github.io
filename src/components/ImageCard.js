import "./ImageCard.scss";
import React, { Component } from "react";
import { imageNotFound_4x6 as default4x6,
  imageNotFound_square as defaultSquare } from "../resources/";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class ImageCard extends Component {
  getImage(props) {
    if (typeof props.image === "undefined") {
      if (props.size === "square") {
        return defaultSquare;
      }

      return default4x6;
    }

  return props.image;
  }

  render() {
    const { route, alt, classname, clickable, textEnabled, text } = this.props;
    const overlay = textEnabled ? <div id="overlay"><div>{text}</div></div> : <div id="overlay"/>;
    const image = this.getImage(this.props);

    if (clickable) {
      return (
        <div className={`ImageCard Clickable ${classname}`}>
          <Link id="wrapper" onClick={this.handleOnClick} to={route}>
            <img src={image} alt={alt}/>
            {overlay}
          </Link>
        </div>
      );
    }

    return (
      <div className={`ImageCard ${classname}`}>
        <div id="wrapper">
          <img src={image} alt={alt}/>
          {overlay}
        </div>
      </div>
    );

  }
}

ImageCard.propTypes = {
  "alt": PropTypes.string.isRequired,
  "classname": PropTypes.string,
  "clickable": PropTypes.bool,
  "image": PropTypes.object,
  "route": PropTypes.string,
  "size": PropTypes.string,
  "text": PropTypes.string,
  "textEnabled": PropTypes.bool
};


ImageCard.defaultProps = {
  "classname": "",
  "clickable": false,
  "route": "",
  "size": "4x6",
  "text": "This project is really cool!",
  "textEnabled": false
};
