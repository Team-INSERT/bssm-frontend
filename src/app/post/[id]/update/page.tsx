"use client";

import UpdatePage from "@/templates/forum-edit";

interface IPostUpdateAppPageParams {
  params: {
    id: number;
  };
}

const Update = ({ params }: IPostUpdateAppPageParams) => {
  return <UpdatePage {...params} />;
};

export default Update;
