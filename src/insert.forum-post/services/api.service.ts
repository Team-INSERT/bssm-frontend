import httpClient from "@/_apis/httpClient";
import { LIKE } from "@/_constants";

interface IGetPostCommentListProps {
  id: string;
  pageParam: number;
}

interface IGetRecommentListProps {
  id: number;
  pageParam: number;
}

interface IPostCommentProps {
  id: number;
  detail: string;
}

// like

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

// comment

export const getPostCommentList = async ({
  id,
  pageParam: page,
}: IGetPostCommentListProps) => {
  const { data } = await httpClient.comment.getById({ params: { id, page } });
  return data;
};

export const createPostComment = async ({ id, detail }: IPostCommentProps) => {
  const { data } = await httpClient.comment.postById(
    { detail },
    { params: { id } },
  );
  return data;
};

export const updatePostComment = async (comment: IPostCommentProps) => {
  const { data } = await httpClient.comment.put(comment);
  return data;
};

export const deletePostComment = async (id: number) => {
  const { data } = await httpClient.comment.deleteById({
    params: { id },
  });
  return data;
};

// recomment

export const getRecommentList = async ({
  id,
  pageParam: page,
}: IGetRecommentListProps) => {
  const { data } = await httpClient.recomment.getById({ params: { id, page } });
  return data;
};

export const createRecomment = async ({ id, detail }: IPostCommentProps) => {
  const { data } = await httpClient.recomment.postById(
    { detail },
    {
      params: { id },
    },
  );
  return data;
};

export const updateRecomment = async (comment: IPostCommentProps) => {
  const { data } = await httpClient.recomment.put(comment);
  return data;
};

export const deleteRecomment = async (id: number) => {
  const { data } = await httpClient.recomment.deleteById({
    params: { id },
  });
  return data;
};
