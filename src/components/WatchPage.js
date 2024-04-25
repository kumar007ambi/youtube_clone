import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utills/appSlice";
import CommentsPage from "./CommentsPage";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  //useSearchParams works as hook
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="880"
            height="480"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsPage/>
    </div>
  );
};

export default WatchPage;
