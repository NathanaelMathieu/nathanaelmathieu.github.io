/* eslint-disable quote-props */
import "./IconButtons.scss";
import { IoIosPaper, IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import React from "react";
import resume from "../Nathanael_Mathieu_Resume.pdf";

function styleIcon(IconComponent, route) {
  return (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value ={{ className: "icon",
      size: "2em" }}>
          <IconComponent/>
      </IconContext.Provider>
    </a>
  );
}

function IconButtons() {
  return <div className="IconButtons">
      {styleIcon(
        GoMarkGithub,
        "https://github.com/NathanaelMathieu/"
      )}
      {styleIcon(
        IoMdMail,
        "mailto:nathanael.eng.mathieu@gmail.com"
      )}
      {styleIcon(
        FaLinkedin,
        "https://www.linkedin.com/in/nathanaelmathieu/"
      )}
      {styleIcon(
        IoIosPaper,
        resume
      )}
    </div>;
}

export default IconButtons;
