import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={require("./images/katie-runner.png")}
        title="Life lessons with Katie Zaferes"
        country="USA"
        rating={4.7}
        reviewCount={8}
        cost={136}
      />
      <Footer />
    </div>
  );
}
