import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-gray-100 rounded-lg px-5 py-1 m-2">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
