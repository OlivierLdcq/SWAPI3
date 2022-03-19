import React, { Component } from "react";
import "./CardDisplay.css";
import Card2 from "./Card2";
const CardDisplay = ({ starWarsList, search, select, cardFlash, count }) => {
  const SWLCPY = JSON.parse(JSON.stringify(starWarsList.results));
  console.log("this is SWLCPy");
  console.log(SWLCPY);
  SWLCPY[0].rank = 1;
  SWLCPY[1].rank = 2;
  SWLCPY[2].rank = 3;
  SWLCPY[3].rank = 4;
  SWLCPY[9].rank = 5;
  SWLCPY[4].rank = 6;
  SWLCPY[5].rank = 7;
  SWLCPY[6].rank = 8;
  SWLCPY[7].rank = 9;
  SWLCPY[8].rank = 10;

  function SortArrayByAlpha(x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }
  var sortedList;
  switch (select) {
    case "popularity":
      sortedList = SWLCPY.sort(function (a, b) {
        return parseFloat(a.rank) - parseFloat(b.rank);
      });
      break;
    case "alphabetical":
      sortedList = SWLCPY.sort(SortArrayByAlpha);
      break;
    case "height":
      sortedList = SWLCPY.sort(function (a, b) {
        return parseFloat(a.height) - parseFloat(b.height);
      });
      break;
    case "mass":
      sortedList = SWLCPY.sort(function (a, b) {
        return parseFloat(a.mass) - parseFloat(b.mass);
      });
      break;
  }

  if (starWarsList !== "") {
    var filteredList = sortedList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    filteredList = sortedList;
  }

  const heightArray = starWarsList.results.map((item) => {
    return item.height;
  });
  const massArray = starWarsList.results.map((item) => {
    return item.mass;
  });

  let tallest = Math.max(...heightArray);
  let heaviest = Math.max(...massArray);
  let mostPopular = 100;
  let todivedBy = tallest / 100;
  let todivedByforMass = heaviest / 100;
  return (
    <div className="CardDisplay_CTN">
      <div className="CardDisplay">
        {filteredList.map((item, index) => {
          return (
            <Card2
              key={index}
              name={item.name}
              rank={item.rank}
              mass={item.mass}
              height={item.height}
              gender={item.gender}
              todivedBy={todivedBy}
              todivedByforMass={todivedByforMass}
              cardFlash={cardFlash}
              count={count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplay;
