"use client";

import PostPage from "@/page/forum-post";

interface IPostAppPageParams {
  params: {
    postType: string;
    id: number;
  };
}

const Post = ({ params }: IPostAppPageParams) => {
  return <PostPage {...params} />;
};

export default Post;
