import React, { useEffect, useState } from "react";

const Javaif = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 0);
    }, 1000);
  });

  console.log("count ", count);

  return <h1>JavaScriptif {count}</h1>;
};
export default Javaif;
