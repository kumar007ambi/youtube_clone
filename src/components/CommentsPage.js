import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Random User",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Random User",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Random User",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Random User",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Random User",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsPage = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {/* recursively calling CommentList itself */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsPage;
