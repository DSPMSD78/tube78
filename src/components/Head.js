import React, { useEffect, useState } from "react";
import logo from "../utils/Images/585e4bf3cb11b227491c339a.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const cache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheSearch({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="logo"
            src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-4  w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onBlur={() => setShow(false)}
            onFocus={() => setShow(true)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {show && (
          <div className="fixed  w-[34rem] px-2 bg-slate-50 rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li className="p-2 shadow-sm hover:bg-gray-100" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-10" alt="user-icon" src={logo} />
      </div>
    </div>
  );
};

export default Head;
