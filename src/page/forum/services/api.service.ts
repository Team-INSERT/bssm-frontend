import httpClient from "@/apis/httpClient";
import { IPostQuery } from "@/interfaces";

export const getPostList = async (postConfig: IPostQuery) => {
  const { data } = await httpClient.post.getPostList(postConfig);
  return data;
};
