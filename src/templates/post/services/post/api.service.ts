import { refresh } from "@/apis/token";
import { ERROR } from "@/apis/constants";
import {
  createGraphQLPost,
  deleteGraphQLPost,
  getGraphQLPost,
  getGraphQLPostList,
  updateGraphQLPost,
} from "./graphql.service";
import { GetPostListProps } from "../../types/@props";
import { PostData } from "../../types";

export const getPostList = async (params: GetPostListProps) => {
  const data = await getGraphQLPostList(params);
  return data;
};

export const getPost = async (id: number) => {
  const data = await getGraphQLPost(id);
  return data;
};

export const updatePost = async (post: PostData) => {
  try {
    const data = await updateGraphQLPost(post);
    return data;
    // eslint-disable-next-line
  } catch (err: any) {
    const { code } = err.response;
    if (code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      updatePost(post);
    }
  }
};

export const createPost = async (post: PostData) => {
  try {
    const data = await createGraphQLPost(post);
    return data;
    // eslint-disable-next-line
  } catch (err: any) {
    const { code } = err.response;
    if (code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      createPost(post);
    }
  }
};

export const deletePost = async (id: number) => {
  try {
    await deleteGraphQLPost(id);
    // eslint-disable-next-line
  } catch (err: any) {
    const { code } = err.response;
    if (code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      deletePost(id);
    }
  }
};
