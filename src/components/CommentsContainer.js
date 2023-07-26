import React from "react";

import logo from "../utils/Images/585e4bf3cb11b227491c339a.png";

const commentsData = [
  {
    name: "DSP MSD",
    comment: "abcdefghijklmnopqrstuvwxyz",
    replies: [
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [
          {
            name: "DSP MSD",
            comment: "abcdefghijklmnopqrstuvwxyz",
            replies: [],
          },
          {
            name: "DSP MSD",
            comment: "abcdefghijklmnopqrstuvwxyz",
            replies: [
              {
                name: "DSP MSD",
                comment: "abcdefghijklmnopqrstuvwxyz",
                replies: [],
              },
              {
                name: "DSP MSD",
                comment: "abcdefghijklmnopqrstuvwxyz",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
    ],
  },
  {
    name: "DSP MSD",
    comment: "abcdefghijklmnopqrstuvwxyz",
    replies: [],
  },
  {
    name: "DSP MSD",
    comment: "abcdefghijklmnopqrstuvwxyz",
    replies: [
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
    ],
  },
  {
    name: "DSP MSD",
    comment: "abcdefghijklmnopqrstuvwxyz",
    replies: [
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [
          {
            name: "DSP MSD",
            comment: "abcdefghijklmnopqrstuvwxyz",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "DSP MSD",
    comment: "abcdefghijklmnopqrstuvwxyz",
    replies: [
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
      {
        name: "DSP MSD",
        comment: "abcdefghijklmnopqrstuvwxyz",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="p-2 flex bg-gray-50 shadow-sm rounded-lg my-2">
      <img className="w-10 h-10 mr-2 p-1" alt="icon" src={logo} />
      <div>
        <p className="mx-2">{name}</p>
        <p className="mx-2">{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-lg font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
