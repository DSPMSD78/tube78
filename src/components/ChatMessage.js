import React from "react";
import logo from "../utils/Images/585e4bf3cb11b227491c339a.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex m-2 items-center">
      <img className="h-10 px-2" alt="user-icon" src={logo} />
      <span className="px-2 font-bold">{name}</span>
      <span className="px-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
