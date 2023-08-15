import httpClient from "@/apis/httpClient";
import { IPostListQuery } from "@/interfaces";

export const getPostList = async (postConfig: IPostListQuery) => {
  const { data } = await httpClient.post.getPostList(postConfig);
  return data;
};
