import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Life lessons with Katie Zaferes"
        country="USA"
        rating={4.7}
        reviewCount={8}
        cost={136}
      />
    </div>
  );
}
