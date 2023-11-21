"use client";

import PostDetailPage from "@/templates/post/layouts/detail";

interface PostDetailPageParams {
  params: {
    id: number;
  };
}

const PostDetail = ({ params }: PostDetailPageParams) => {
  return <PostDetailPage {...params} />;
};

export default PostDetail;
