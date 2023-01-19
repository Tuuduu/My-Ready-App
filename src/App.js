import "./App.css";
import React from "react";
// import Anit from "./components/Anit";
// import anime from "animejs/lib/anime.es.js";
// import Javalf from "./components/JavaIf";
// import { useState } from "react";

function App() {
  // const [toggle, setToggle] = useState(false);

  //   anime({
  //     targets: ".item",
  //     translateX: function () {
  //       return anime.random(-700, 700);
  //     },
  //     translateY: function () {
  //       return anime.random(-700, 700);
  //     },
  //     scale: function () {
  //       return anime.random(1, 5);
  //     },
  //     easing: "linear",
  //     duration: 3000,
  //     delay: anime.stagger(10),
  //     // complete: animatBlocks,
  //   });

  // var battery = {
  //   charged: "0%",
  //   cycles: 120,
  // };

  // anime({
  //   targets: battery,
  //   prop1: 50,
  //   prop2: "100%",
  //   easing: "linear",
  //   cycles: 130,
  //   round: 1,
  //   update: function () {
  //     var number = JSON.stringify(battery);
  //     console.log("Number == " + number);
  //     return number;
  //   },
  // });

  // var count = animatCount();

  // if (toggle === true) {
  //   // animatBlocks();
  //   animatCount();
  // var lastName = "Ganbat";
  // alert("global хэсгээс дуудаж байна.");

  // function HvniiMedeelel() {
  //   var firstName = "Tuuduu";
  //   console.log(firstName + " " + lastName);
  //   alert("Хүний мэдээлэл function хэсгээс дуудаж байна.");
  // }
  // // }

  // // eslint-disable-next-line no-undef
  // console.log(lastName + " gg");

  // HvniiMedeelel();

  // console.log("Battery " + lastName);

  const a = null;

  console.log("fsdf", a);

  return (
    <div className=" w-full h-screen flex relative items-center justify-center bg-red-700">
      <h1
        className="text-[40px] text-gray-100 font-extrabold cursor-pointer"
        // onClick={() => setToggle(!toggle)}
      >
        Hello world
      </h1>
      <div className="absolute top-10 w-[60px] h-[60px] bg-red-500 flex items-center item justify-center">
        {}
      </div>
      <div className="absolute left-10 w-[60px] h-[60px] bg-red-500 flex items-center item justify-center">
        {/* {count} */}
      </div>
      <div className="absolute right-10 w-[60px] h-[60px] bg-red-500 flex items-center item justify-center">
        {/* {count} */}
      </div>
      {/* <Anit number={100} /> */}
      {/* <Javalf /> */}
    </div>
  );
}

export default App;
