import httpClient from "@/apis/httpClient";
import { LIKE } from "@/constants";

interface IGetPostCommentListProps {
  id: string;
  pageParam: number;
}

export const getPostCommentList = async ({
  id,
  pageParam: page,
}: IGetPostCommentListProps) => {
  const { data } = await httpClient.comment.getById({ params: { id, page } });
  return data;
};

interface ICreatePostCommentProps {
  id: string;
  detail: string;
}

export const createPostComment = async ({
  id,
  detail,
}: ICreatePostCommentProps) => {
  const { data } = await httpClient.comment.postById(
    { detail },
    { params: { id } },
  );
  return data;
};

interface IUpdatePostCommentProps {
  id: number;
  detail: string;
}

export const updatePostLike = async (id: string) => {
  const { data } = await httpClient.like.put({
    type: LIKE.POST,
    partyId: id,
  });
  return data;
};

export const updateCommentLike = async (id: number) => {
  const { data } = await httpClient.like.put({
    type: LIKE.COMMENT,
    partyId: id,
  });
  return data;
};

export const updateRecommentLike = async (id: number) => {
  const { data } = await httpClient.like.put({
    type: LIKE.RECOMMENT,
    partyId: id,
  });
  return data;
};

export const updatePostComment = async (comment: IUpdatePostCommentProps) => {
  const { data } = await httpClient.comment.put(comment);
  return data;
};

export const deletePostComment = async (id: number) => {
  const { data } = await httpClient.comment.deleteById({
    params: { id },
  });
  return data;
};
