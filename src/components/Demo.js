import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [toggle, setToggle] = useState(false);
  const [number, setNumber] = useState();

  const prime = useMemo(() => findPrime(number), [number]);

  return (
    <div
      className={
        "w-full mx-4 p-2 border border-black " + (toggle && "bg-gray-400")
      }
    >
      <div className="flex gap-1 justify-between">
        <div>Demo</div>
        <input
          className="border border-black"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          className="border bg-yellow-200 py-1 px-2"
          onClick={() => setToggle(!toggle)}
        >
          Toggle
        </button>
      </div>
      <div className="flex justify-center p-2 m-2">{prime}</div>
    </div>
  );
};

export default Demo;
