import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const [show, setShow] = useState(false);

function App() {
  return (
    <dev className="flex flex-col items-center justify-center h-screen">
      <dev className="flex flex-row gap-x-20 h-[80px] w-[500px] rounded-md bg-blue-200 items-center justify-center">
        <button
          onClick={setShow}
          className="border-2 border-blue-200 group py-1 px-4 hover:border-blue-500 rounded-md"
        >
          <h1 className="cursor-pointer group-hover:text-blue-500">Home</h1>
        </button>
        <button className="border-2 border-blue-200 group py-1 px-4 hover:border-red-500 rounded-md">
          <h1 className="cursor-pointer group-hover:text-red-500">Server</h1>
        </button>
        <button className="border-2 border-blue-200 group py-1 px-4 hover:border-green-500 rounded-md">
          <h1 className="cursor-pointer group-hover:text-green-500">Product</h1>
        </button>
      </dev>
      <dev className="flex flex-row items-center justify-around h-[80px] w-[500px] pt-10">
        <dev
          className={`${
            show(true) ? "hidden" : ""
          } h-20 w-20 bg-blue-500 rounded-full`}
        ></dev>
        <dev className={`h-20 w-20 bg-red-500 rounded-full`}></dev>
        <dev className={`h-20 w-20 bg-green-500 rounded-full`}></dev>
      </dev>
    </dev>
  );
}

export default App;
