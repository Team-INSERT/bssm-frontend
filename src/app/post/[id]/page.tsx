"use client";

import PostDetailPage from "@/templates/post/layouts/detail";

interface IPostAppPageParams {
  params: {
    id: number;
  };
}

const PostDetail = ({ params }: IPostAppPageParams) => {
  return <PostDetailPage {...params} />;
};

export default PostDetail;
