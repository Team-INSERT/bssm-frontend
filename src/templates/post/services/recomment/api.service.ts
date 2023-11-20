import httpClient from "@/apis/httpClient";
import { GetCommentListProps, PostCommentProps } from "../../interfaces";

export const getRecommentList = async ({
  id,
  pageParam: page,
}: GetCommentListProps) => {
  const { data } = await httpClient.recomment.getById({ params: { id, page } });
  return data;
};

export const createRecomment = async ({ id, detail }: PostCommentProps) => {
  const { data } = await httpClient.recomment.postById(
    { detail },
    {
      params: { id },
    },
  );
  return data;
};

export const updateRecomment = async (comment: PostCommentProps) => {
  const { data } = await httpClient.recomment.put(comment);
  return data;
};

export const deleteRecomment = async (id: number) => {
  const { data } = await httpClient.recomment.deleteById({
    params: { id },
  });
  return data;
};
