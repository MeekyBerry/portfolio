import React from "react";
import WebDeveloper from "../assets/images/web-developer.gif";
import GitHub from "../assets/images/socials/icons8-github-94.png";
import LinkedIn from "../assets/images/socials/icons8-linkedin-94.png";
import LeetCode from "../assets/images/socials/leetCode.png";
import { Link } from "react-router-dom";
import Resume from "../assets/images/socials/resume.pdf";
import ProjectSlide from "./animation/project";
import Avatar from "./avatar";
import Footer from "./footer";
import { Reveal, JackInTheBox, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Box } from "theme-ui";
/** @jsxImportSource theme-ui */

// ANIMATION
const rotateInDownRight = keyframes`
from {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
  opacity: 0;
}
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1;
}`;

const lightSpeedInLeft = keyframes`
from {
  -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
  transform: translate3d(-100%, 0, 0) skewX(30deg);
  opacity: 0;
}

60% {
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  opacity: 1;
}

80% {
  -webkit-transform: skewX(5deg);
  transform: skewX(5deg);
}

to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}`;

const Home = () => {
  const codeSnippet = `
  let button_menu = document.querySelector(".header_button");
  let float_menu = document.querySelector(".header_menu--float");
  let line_top = document.querySelector(".header_button_line--top");
  let line_under = document.querySelector(".header_button_line--bottom");
  button_menu.isSelected = false;
  function addEffectWriting(element, time) {
    let element_array = element.innerText.split("");
    element.count = 0;
    element.innerText = "";
    function writeSymbols() {
      element.innerText += element_array[element.count];
      element.count++;
      if (element.count <= element_array.length) {
        setTimeout(() => {
          writeSymbols();
        }, time);
      } else if (element.count >= element_array.length) {
        element.count = 0;
        element.innerText = "";
        writeSymbols();
      }
    }
    writeSymbols();
  }`;


  return (
    <Box
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
      >
    <div className="app">
      <div className="home" sx={{
      backgroundColor: "background",
      color: "text"
    }}>
        <div className="home--media">
          <Fade direction="up" duration={5000}>
            <div className="home--media__line"></div>
            <div className="home--media__frame">
              <Link
                to="https://github.com/MeekyBerry"
                target="_blank"
                rel="noreferrer"
                className="home--media__frame__img"
              >
                <Avatar
                  image={GitHub}
                  alt="GitHub Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Link>
              <Link
                to="https://leetcode.com/meekyberry/"
                target="_blank"
                rel="noreferrer"
                className="home--media__frame__img"
              >
                <Avatar
                  image={LeetCode}
                  alt="LeetCode Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mikkylanky/"
                target="_blank"
                rel="noreferrer"
                className="home--media__frame__img"
              >
                <Avatar
                  image={LinkedIn}
                  alt="LinkedIn Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <div className="home--contents">
          <div className="home--contents__wrapper">
            <div className="home--contents__content">
              <JackInTheBox duration={5000}>
                <h1 className="home--contents__content__title">ELUE MICHAEL</h1>
                <h2 className="home--contents__content__subtitle">
                  Frontend Developer
                </h2>
                <p className="home--contents__content__desc">
                  I'm a frontend Developer with a strong foundation in HTML,
                  CSS, JavaScript, and more looking for opportunities to develop
                  and enhance my skills while creating innovative and dynamic
                  web solutions.
                </p>
                <div className="home--contents__content__btn">
                  <a href={Resume} target="_blank" rel="noreferrer">
                    <button className="home--contents__content__btn__link">
                      View My Resume
                    </button>
                  </a>

                  <a href="mailto: michaelelue117@gmail.com">
                    <button className="home--contents__content__btn__link">
                      Let's Talk 👋
                    </button>
                  </a>
                </div>
              </JackInTheBox>
            </div>
            <div className="animation-overflow">
              <Reveal keyframes={rotateInDownRight} duration={5000}>
                <div className="home--contents__illustration">
                  <div className="home--contents__illustration__wrapper">
                    <div className="home--contents__illustration__wrapper--avatar">
                      <Avatar
                        image={WebDeveloper}
                        alt="GIF of a web developer working"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="home--contents__illustration__wrapper--overlay"></div>
                  </div>
                  <pre className="home--contents__illustration__text">
                    {codeSnippet}
                  </pre>
                </div>
              </Reveal>
            </div>
          </div>
          <figure className="home--contents__quote">
            <Reveal keyframes={lightSpeedInLeft} duration={5000}>
              <blockquote
                className="home--contents__quote__block"
                cite="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
              >
                <p className="home--contents__quote__block__text">
                  The best way to predict the future is to invent it.
                </p>
              </blockquote>
              <figcaption className="home--contents__quote__block__caption">
                — Alan Kay
                <cite>
                  <a
                    href="https://www.ted.com/speakers/alan_kay#:~:text=%22The%20best%20way%20to%20predict,epistemology%2C%20molecular%20biology%20and%20more"
                    target="_blank"
                    rel="noreferrer"
                    className="home--contents__quote__block__caption__cite"
                  >
                    TED ideas worth spreading
                  </a>
                </cite>
              </figcaption>
            </Reveal>
          </figure>
          <div className="home--slides">
            <ProjectSlide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Box>
  );
};

export default Home;
