"use client";

import PostPage from "@/_pages/forum-post";

interface IPostAppPageParams {
  params: {
    id: number;
  };
}

const Post = ({ params }: IPostAppPageParams) => {
  return <PostPage {...params} />;
};

export default Post;
