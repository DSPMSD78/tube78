import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    setVideos(json?.items);
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <VideoCard data={v} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
