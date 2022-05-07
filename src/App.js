import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);

export default function App() {
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

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
