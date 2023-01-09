import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [red, setRed] = useState("");

  // const consol = "ddfsdfsd";
  // const aa = prompt("Таны төрсөн он хэд вэ?");
  // alert("Сайн байна уу?\n\n\nТаны нас : " + aa);
  // console.log("aa - ийн утга: ", aa);

  console.log(red);

  return (
    <div className="w-full font-roboto bg-gray-800">
      <div className="flex items-center justify-center py-20">
        <div className="bg-gray-400 w-[400px] h-[700px] rounded-lg flex flex-col items-center shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-100 pb-2 pt-10">
            Andriod
          </h1>
          <div
            className={`bg-gray-100 w-[80%] h-[170px] rounded-md flex flex-row `}
          >
            <p className="px-5 py-3 font-bold text-green-400 text-2xl">
              'aa'- ийн утга: {}
            </p>
          </div>
          <div className="flex flex-row p-10 w-full justify-center gap-x-16">
            <div
              onclick={() => {
                setRed("green");
              }}
              className="bg-green-500 w-[50px] h-[50px] rounded-full cursor-pointer"
            ></div>
            <div className="bg-yellow-500 w-[50px] h-[50px] rounded-full"></div>
            <div className="bg-red-500 w-[50px] h-[50px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
