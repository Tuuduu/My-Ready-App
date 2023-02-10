import "./App.css";
import React from "react";

const nowUrl = "/home/www/html/devnew/storage/uploads/Frame";

const editUrl = "storage";

function wordCut(value, editValue) {
  let resultIndex = value.indexOf(editValue);
  return value.slice(resultIndex);
}

const result = wordCut(nowUrl, editUrl);
console.log("Result ", result);

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
