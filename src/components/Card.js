import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--img" />
      <div className="card--stats">
        <img src={require("../images/star.png")} className="card--star" />
        <p>
          {props.rating}{" "}
          <span className="grey">
            ({props.reviewCount}) • {props.country}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        From<span className="bold"> ${props.cost}</span> / person
      </p>
    </div>
  );
}
