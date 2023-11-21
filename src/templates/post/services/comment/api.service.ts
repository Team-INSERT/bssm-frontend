import httpClient from "@/apis/httpClient";
import { GetCommentListProps, PostCommentProps } from "../../types/@props";

export const getCommentList = async ({
  id,
  pageParam: page,
}: GetCommentListProps) => {
  const { data } = await httpClient.comment.getById({ params: { id, page } });
  return data;
};

export const createComment = async ({ id, detail }: PostCommentProps) => {
  const { data } = await httpClient.comment.postById(
    { detail },
    { params: { id } },
  );
  return data;
};

export const updateComment = async (comment: PostCommentProps) => {
  const { data } = await httpClient.comment.put(comment);
  return data;
};

export const deleteComment = async (id: number) => {
  const { data } = await httpClient.comment.deleteById({
    params: { id },
  });
  return data;
};
