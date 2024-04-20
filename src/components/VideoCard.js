import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(info);
  return (
    <div className="p-2 m-2   w-[30%] rounded-lg">
      <img className="rounded-lg w-[125%]" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
