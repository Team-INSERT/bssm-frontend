import httpClient from "@/apis/httpClient";
import { IPostQuery } from "@/interfaces";

export const getPost = async (params: IPostQuery) => {
  const { data } = await httpClient.post.getPost({ params });
  return data;
};

export const getComment = async (params: IPostQuery) => {
  const { data } = await httpClient.comment.getPost({ params });
  return data;
};
