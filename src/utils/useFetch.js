import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";

const useFetch = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    setVideos(json?.items);
  };
  return videos;
};

export default useFetch;
