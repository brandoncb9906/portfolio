/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AboutScreen } from "../aboutme/AboutScreen";
import { Cards } from "../cards/Cards";
import "./HomeScreen.css";
export const HomeScreen = () => {
  return (
    <>
      <div className="home-container">
        <img
          className="img-home"
          src="/images/image-2.jpg"
          alt="Picture of me"
        />
        <h1>Welcome to my website</h1>
        <p>This is a little presentation of my self and some projects I made</p>
      </div>
      <AboutScreen />
      <Cards />
    </>
  );
};
