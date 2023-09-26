import { KEY, ROUTER } from "@/constants";
import { DELETE_POST } from "@/gql/post/queries";
import {
  useApolloClient,
  useMutation as useApolloMutation,
} from "@apollo/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  createPostComment,
  deletePostComment,
  updateCommentLike,
  updatePostComment,
  updatePostLike,
} from "./api.service";

export const useDeletePostMutation = () => {
  const apolloClient = useApolloClient();
  const router = useRouter();

  const mutations = useApolloMutation(DELETE_POST, {
    onCompleted: () => {
      apolloClient.cache.reset();
      toast.success("글이 삭제되었습니다!");
      router.push(ROUTER.POST.LIST);
    },
  });
  return mutations;
};

interface IUseCreateCommentMutationProps {
  id: string;
  detail: string;
}

export const useUpdatePostLikeMutation = () => {
  const apolloClient = useApolloClient();

  return useMutation((id: string) => updatePostLike(id), {
    onSuccess: () => {
      apolloClient.cache.reset();
    },
  });
};

export const useCreatePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (props: IUseCreateCommentMutationProps) => createPostComment(props),
    {
      onSuccess: () => {
        toast.success("댓글을 작성했어요!");
        queryClient.invalidateQueries([KEY.COMMENT]);
      },
    },
  );
};

interface IUseUpdatePostCommentMutationProps {
  id: number;
  detail: string;
}

export const useUpdatePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (comment: IUseUpdatePostCommentMutationProps) => updatePostComment(comment),
    {
      onSuccess: () => {
        toast.success("댓글이 수정되었어요!");
        queryClient.invalidateQueries([KEY.COMMENT]);
      },
    },
  );
};

export const useDeletePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deletePostComment(id), {
    onSuccess: () => {
      toast.success("댓글이 삭제되었어요.");
      queryClient.invalidateQueries([KEY.COMMENT]);
    },
  });
};

export const useUpdateCommentLikeMutation = () => {
  return useMutation((id: number) => updateCommentLike(id));
};
