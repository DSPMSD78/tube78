// import React, { useEffect, useState } from "react";
// import VideoCard from "./VideoCard";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import { Link } from "react-router-dom";

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_API);

//     const json = await data.json();

//     setVideos(json?.items);
//   };
//   return (
//     <div className="flex flex-wrap justify-evenly">
//       {videos.map((v) => (
//         <Link key={v.id} to={"/watch?v=" + v.id}>
//           <VideoCard data={v} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;

// Pagination
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  let videos = [];
  const fetchData = async (page) => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    videos = json?.items;
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return videos.slice((page - 1) * 8, page * 8);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return videos.slice((page - 1) * 8, page * 8);
  };

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["query"],
    async ({ pageParam = 1 }) => {
      const response = await fetchData(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [videos.slice(0, 8)],
        pageParams: [1],
      },
    }
  );

  console.log(data);
  const lastPostRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  const _posts = data?.pages.flatMap((page) => page);

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {_posts.map((post, i) => {
          if (i === _posts.length - 1)
            return (
              <Link
                className="title"
                ref={ref}
                key={post.id}
                to={"/watch?v=" + post.id}
              >
                <VideoCard data={post} />
              </Link>
            );
          return (
            <Link className="title" key={post.id} to={"/watch?v=" + post.id}>
              <VideoCard data={post} />
            </Link>
          );
        })}
        {/* {data?.pages.map((page, i) => (
        <div className="flex flex-wrap justify-evenly" key={i}>
          {page.map((v) => (
            <Link key={v.id} to={"/watch?v=" + v.id}>
              <VideoCard data={v} />
            </Link>
          ))}
        </div>
      ))} */}
      </div>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : (data?.pages.length ?? 0) < 7
          ? "Load more"
          : "Nothing more to load"}
      </button>
    </>
  );
};

export default VideoContainer;
