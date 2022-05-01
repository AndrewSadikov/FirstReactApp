import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src={require("../images/katie-runner.png")} className="card--img" />
      <div className="card--stats">
        <img src={require("../images/star.png")} className="card--star" />
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
