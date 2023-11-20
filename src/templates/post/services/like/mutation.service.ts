import { useMutation } from "@tanstack/react-query";
import {
  updateCommentLike,
  updatePostLike,
  updateRecommentLike,
} from "./api.service";

export const useUpdatePostLikeMutation = () => {
  return useMutation((id: string) => updatePostLike(id));
};

export const useUpdateCommentLikeMutation = () => {
  return useMutation((id: string) => updateCommentLike(id));
};

export const useUpdateRecommentLikeMutation = () => {
  return useMutation((id: string) => updateRecommentLike(id));
};
