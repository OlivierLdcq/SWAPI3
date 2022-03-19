import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import "./Card.css";
const Card = ({ name, height, mass, gender, todivedBy, todivedByforPopu }) => {
  let personalHeight = height / todivedBy + "%";

  var personalMass = "0px";
  if (mass <= 50) {
    personalMass = "40px";
  } else if (mass <= 100) {
    personalMass = "80px";
  } else if (mass >= 100) {
    personalMass = "120px";
  }

  switch (name) {
    case "Luke Skywalker":
      var pictureUrl =
        "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg";
      break;
    case "C-3PO":
      var pictureUrl =
        "https://radiodisneyclub.fr/wp-content/uploads/2019/10/C3PO.jpg";
      break;
    case "R2-D2":
      var pictureUrl =
        "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/r2d2baker.jpg";
      break;
    case "Darth Vader":
      var pictureUrl =
        "http://www.premiere.fr/sites/default/files/styles/partage_rs/public/2018-04/dark_vador_1.jpg";
      break;
    case "Leia Organa":
      var pictureUrl =
        "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/culture/cinema/star-wars-la-mort-de-la-princesse-leia-aura-t-elle-un-impact-sur-les-futurs-films-1152728/18771008-1-fre-FR/Star-Wars-la-mort-de-la-princesse-Leia-aura-t-elle-un-impact-sur-les-futurs-films.jpg";
      break;
    case "Owen Lars":
      var pictureUrl =
        "https://www.starwars-universe.com/images/encyclopedie/personnages/republicains/owen_luke.jpg";
      break;
  }
  let Grow = () => {
    setTimeout(() => {
      return "grow";
    }, 1000);
  };
  return (
    <div className="Card">
      <div
        className="imageCover"
        style={{
          backgroundImage: `url(${pictureUrl})`,
        }}
      ></div>
      <h2>{`${name}`}</h2>
      <h3>{`Height : ${height}`}</h3>
      <div
        className="heightBar"
        id="heightID"
        style={{ width: personalHeight }}
      ></div>
      <div className="massCtn">
        <p>{`weight : ${mass}`}</p>
        <div
          className={"massBar"}
          id="massID"
          style={{ width: personalMass, height: personalMass }}
        ></div>
      </div>
      <p>{`gender : ${gender}`}</p>
    </div>
  );
};

export default Card;
