import React, { Component } from "react";
import "./Counter.css";
const Counter = ({ count }) => {
  return (
    <div className="Counter">
      <p>{count}</p>
    </div>
  );
};

export default Counter;
