"use client";

import PostEditPage from "@/templates/post/layouts/edit";

interface IPostUpdateAppPageParams {
  params: {
    id: number;
  };
}

const Update = ({ params }: IPostUpdateAppPageParams) => {
  return <PostEditPage {...params} />;
};

export default Update;
