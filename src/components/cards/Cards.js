import React from "react";
import { CardItem } from "./CardItem";

export const Cards = () => {
  return (
    <div className="cards">
      <h1>These are some of my works!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image-4.jpg"
              text="A calendar where you can write down all your pending so you don't forget anything."
              label="React"
              path="/mern-calendar"
            />
            <CardItem
              src="images/image-1.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image-1.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/image-1.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/image-1.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
