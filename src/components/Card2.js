import React, { Component } from "react";
import "./Card2.css";
const Card2 = ({
  cardFlash,
  name,
  height,
  mass,
  todivedBy,
  todivedByforMass,
  todivedByforPopu,
  rank,
  count,
}) => {
  console.log("card render");
  let personalHeight = height / todivedBy + "%";
  let personalMass = mass / todivedByforMass + "%";
  let pesonalPopu = 100 / rank + "%";
  // console.log(pesonalPopu);

  switch (name) {
    case "Luke Skywalker":
      var pictureUrl =
        "https://images.bfmtv.com/RxO3TGwT51kwE4S_0aFVsNVoKbk=/4x3:996x561/640x0/images/-76356.jpg";
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
    case "Beru Whitesun lars":
      var pictureUrl =
        "https://static.pix-geeks.com/2019/04/star-wars-brie-larson-jouera-le-role-principal-du-spin-off-centre-sur-beru-whitesun-92687.jpg";
      break;
    case "R5-D4":
      var pictureUrl =
        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960";
      break;
    case "R5-D4":
      var pictureUrl =
        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960";
      break;
    case "Biggs Darklighter":
      var pictureUrl =
        "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780";
      break;
    case "Obi-Wan Kenobi":
      var pictureUrl =
        "https://leclaireur.fnac.com/wp-content/uploads/2022/02/obi-wan-kenobi-1256x826.jpeg";
      break;
  }
  return (
    <div className="Card2">
      <div
        className="ctn1"
        style={{
          backgroundImage: `url(${pictureUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="ctn2">
        <h2>{name}</h2>
      </div>
      <div className="ctn3">
        <p>height</p>
        <div className="bar_n_count">
          <div className="hBar">
            <div
              className="hBarProgress"
              style={cardFlash ? { width: personalHeight } : undefined}
            ></div>{" "}
          </div>
          <span>{Math.round((count * height) / 100) + " cm"}</span>
        </div>
        <p>weight</p>
        <div className="bar_n_count">
          <div className="hBar">
            <div
              className="hBarProgress"
              style={cardFlash ? { width: personalMass } : undefined}
            ></div>
          </div>
          <span>{Math.round((count * mass) / 100) + " kg"}</span>
        </div>
        <p>popularity</p>
        <div className="bar_n_count">
          <div className="hBar">
            <div
              className="hBarProgress"
              style={cardFlash ? { width: pesonalPopu } : undefined}
            ></div>
          </div>
          <span>{Math.round(count / rank) + " %"}</span>
        </div>
        {/* <div className="hBar">
          <div
            className={cardFlash ? { width: personalMass } : "hBarProgress"}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Card2;
