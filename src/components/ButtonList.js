import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Javascript",
    "Computer Science",
    "Stocks",
    "Debates",
    "News",
    "Cricket",
    "Volleyball",
    "Live",
    "Chess",
    "Music",
  ];
  return (
    <div className="button-list">
      {list.map((x) => (
        <Button key={x} name={x} />
      ))}
    </div>
  );
};

export default ButtonList;
