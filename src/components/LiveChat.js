import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(15),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-3 p-3 border border-solid bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {data.map((x, index) => (
          <ChatMessage key={index} name={x.name} message={x.message} />
        ))}
      </div>
      <form
        className="w-full ml-3 p-3 border border-black flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          liveMessage &&
            dispatch(
              addMessage({
                name: "DSP MSD",
                message: liveMessage,
              })
            );
          setLiveMessage("");
        }}
      >
        <input
          className="w-10/12 px-2 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <div className="w-1/12 mx-1 px-1">
          <button className="px-2 font-bold bg-yellow-200">Send</button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
