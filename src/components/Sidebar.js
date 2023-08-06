import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);

  if (toggle === false) {
    return null;
  }

  return (
    <div className="sidebar p-5 shadow-lg">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
