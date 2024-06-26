import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  //console.log(info);
  return (
    <div className="p-2 m-3 w-50 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li>{statistics.viewCount} Million views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
