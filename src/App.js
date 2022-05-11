import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  //This function maps the information imported from the data.js file and
  //returns one or multiple Card components to display on the page
  const cards = data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        country={item.country}
        rating={item.rating}
        reviewCount={item.reviewCount}
        cost={item.cost}
      />
    );
  });

  //This returns the components including the Cards generated above
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
