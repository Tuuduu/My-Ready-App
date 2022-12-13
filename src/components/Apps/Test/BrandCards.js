import React from "react";
import { useState } from "react";

const BrandCards = () => {
  // # 1 useState ( Count , nameChange )
  // const [count, setcount] = useState(0);
  // const [name, setname] = useState("Tuuduu");

  // function handleClick() {
  //   setcount(count + 1);
  // }
  // function handleClick1() {
  //   setname("Munkhtogtokh");
  // }

  // # 2 useState (  )
  const [text, setText] = useState("Hi Tuuduu");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p>You typed: {text}</p>
      <input
        value={text}
        onChange={handleChange}
        className="border border-black rounded p-1 my-5"
      />
      <button
        onClick={() => setText("Hi Tuuduu")}
        className="py-1 px-6 rounded-full bg-purple-500"
      >
        reset
      </button>
    </div>
  );
};

export default BrandCards;
