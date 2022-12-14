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

  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click her!!</button>
    </div>
  );
};

export default BrandCards;
