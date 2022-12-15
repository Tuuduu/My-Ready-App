import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BrandCards from "./BrandCards";

function App() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <dev className="flex flex-col items-center justify-center h-screen">
      <dev className="flex flex-row gap-x-20 h-[80px] w-[500px] rounded-md bg-blue-200 items-center justify-center">
        <button
          onClick={() => setToggle(!toggle)}
          className="border-2 border-blue-200 group py-1 px-4 hover:border-blue-500 rounded-md"
        >
          <h1 className="cursor-pointer group-hover:text-blue-500 uppercase font-bold">
            Blue
          </h1>
        </button>
        <button
          onClick={() => setToggle1(!toggle1)}
          className="border-2 border-blue-200 group py-1 px-4 hover:border-red-500 rounded-md"
        >
          <h1 className="cursor-pointer group-hover:text-red-500 uppercase font-bold">
            Red
          </h1>
        </button>
        <button
          onClick={() => setToggle2(!toggle2)}
          className="border-2 border-blue-200 group py-1 px-4 hover:border-green-500 rounded-md"
        >
          <h1 className="cursor-pointer group-hover:text-green-500 uppercase font-bold">
            Green
          </h1>
        </button>
      </dev>
      <dev className="flex flex-rowitems-center justify-around h-[80px] w-[500px] pt-10">
        <dev
          className={`${
            toggle == true ? "hidden" : ""
          } h-20 w-20 bg-blue-500 rounded-full`}
        ></dev>
        <dev
          className={`${
            toggle1 == true ? "hidden" : ""
          } h-20 w-20 bg-red-500 rounded-full`}
        ></dev>
        <dev
          className={`${
            toggle2 == true ? "hidden" : ""
          } h-20 w-20 bg-green-500 rounded-full`}
        ></dev>
      </dev>
      <div className="pt-20">
        <BrandCards />
      </div>
    </dev>
  );
}

export default App;
