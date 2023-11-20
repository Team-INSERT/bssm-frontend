import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import KEY from "@/constants/key.constant";
import { PostCommentProps } from "../../interfaces";
import {
  createRecomment,
  deleteRecomment,
  updateRecomment,
} from "./api.service";

export const useCreateRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((comment: PostCommentProps) => createRecomment(comment), {
    onSuccess: () => {
      toast.success("답글을 작성했어요!");
      queryClient.invalidateQueries([KEY.RECOMMENT]);
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};

export const useUpdateRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((comment: PostCommentProps) => updateRecomment(comment), {
    onSuccess: () => {
      toast.success("답글이 수정되었어요!");
      queryClient.invalidateQueries([KEY.RECOMMENT]);
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};

export const useDeleteRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteRecomment(id), {
    onSuccess: () => {
      toast.success("답글이 삭제되었어요.");
      queryClient.invalidateQueries([KEY.RECOMMENT]);
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};
