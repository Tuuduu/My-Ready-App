import "./App.css";
import React from "react";
import anime from "animejs/lib/anime.es.js";
// import { useState } from "react";

function App() {
  function animatBlocks() {
    anime({
      targets: ".item",
      left: "240px",
      backgroundColor: "#000000",
      borderRadius: ["0%", "50%"],
      easing: "easeInOutQuad",
    });
  }

  return (
    <div className="bg-red-600 w-full h-screen flex items-center justify-center anim">
      <h1 className="text-[40px] text-white font-extrabold">Hello world</h1>
    </div>
  );
}

export default App;
