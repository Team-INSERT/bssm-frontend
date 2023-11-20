import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import KEY from "@/constants/key.constant";
import { PostCommentProps } from "../../interfaces";
import { createComment, deleteComment, updateComment } from "./api.service";

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((comment: PostCommentProps) => createComment(comment), {
    onSuccess: () => {
      toast.success("댓글을 작성했어요!");
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((comment: PostCommentProps) => updateComment(comment), {
    onSuccess: () => {
      toast.success("댓글을 수정했어요!");
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteComment(id), {
    onSuccess: () => {
      toast.success("댓글을 삭제했어요!");
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};
