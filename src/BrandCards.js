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
  // const [text, setText] = useState("Hi Tuuduu");

  const [count, setCount] = useState(0);

  // function handleChange(e) {
  //   setText(e.target.value);
  // }
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <p className="pb-5 text-gray-600">{count}</p>
      <button
        className="py-1 px-4 rounded-lg border-2 border-gray-800 text-gray-800"
        onClick={() => setCount(count + 1)}
      >
        Click here!!
      </button>
    </div>
  );
};

export default BrandCards;
