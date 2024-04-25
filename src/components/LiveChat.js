import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utills/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages=useSelector((store)=>store.chat.message)

useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("polling");
      dispatch(
        addMessage({
          name: "Random User",
          message: "Lorem ipsum",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
        <ChatMessage message="Random user" messages="random comment"  />
          {
            // Disclaimer: Don't use indexes as keys
            //     chatMessages.map((c, i) => (
            //       <ChatMessage key={i} name={c.name} message={c.message} />
            //     ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        // onSubmit={(e) => {
        //   e.preventDefault();

        //   dispatch(
        //     addMessage({
        //       name: "Akshay Saini",
        //       message: liveMessage,
        //     })
        //   );
        // //   setLiveMessage("");
        // }}
      >
        <input
          className="px-2 w-96"
          type="text"
          //   value={liveMessage}
          //   onChange={(e) => {
          //     setLiveMessage(e.target.value);
          //   }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
