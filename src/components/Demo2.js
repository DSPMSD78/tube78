import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  return (
    <div className="w-full mx-4 p-2 border border-black ">
      <div className="flex justify-evenly items-center">
        <button
          className="bg-green-200 p-2 m-2 rounded-lg"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase Let
        </button>
        <span>{x}</span>
      </div>
      <div className="flex justify-evenly items-center">
        <button
          className="bg-green-200 p-2 m-2 rounded-lg"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase State
        </button>
        <span>{y}</span>
      </div>
      <div className="flex justify-evenly items-center ">
        <button
          className="bg-green-200 p-2 m-2 rounded-lg"
          onClick={() => {
            z.current += 1;
            console.log(z.current);
          }}
        >
          Increase Ref
        </button>
        <span>{z.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
