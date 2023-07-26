import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;

  console.log();
  return (
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="text-left">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
