"use client";

import PostEditPage from "@/templates/post/layouts/edit";

interface PostUpdatePageParams {
  params: {
    id: number;
  };
}

const Update = ({ params }: PostUpdatePageParams) => {
  return <PostEditPage {...params} />;
};

export default Update;
