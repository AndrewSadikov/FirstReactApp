import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img src={require("../images/group77.png")} className="hero--photo" />
      <h1 className="hero--header">Vacation Experience</h1>
      <p className="hero--text">
        Check out these beautiful places you can go visit on any budget
      </p>
    </section>
  );
}
