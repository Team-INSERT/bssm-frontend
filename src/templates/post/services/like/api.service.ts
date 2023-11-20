import httpClient from "@/apis/httpClient";
import { LIKE } from "../../constants";

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
