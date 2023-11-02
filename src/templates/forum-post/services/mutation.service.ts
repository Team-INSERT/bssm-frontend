import { KEY, ROUTER } from "@/constants";
import { DELETE_POST } from "@/graphql/post/queries";
import {
  useApolloClient,
  useMutation as useApolloMutation,
} from "@apollo/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  createPostComment,
  createRecomment,
  deletePostComment,
  deleteRecomment,
  updateCommentLike,
  updatePostComment,
  updatePostLike,
  updateRecomment,
  updateRecommentLike,
} from "./api.service";

interface IUsePostCommentMutationProps {
  id: number;
  detail: string;
}

// like

export const useUpdatePostLikeMutation = () => {
  const apolloClient = useApolloClient();

  return useMutation((id: string) => updatePostLike(id), {
    onSuccess: () => {
      apolloClient.cache.reset();
    },
  });
};

export const useUpdateCommentLikeMutation = () => {
  return useMutation((id: number) => updateCommentLike(id));
};

export const useUpdateRecommentLikeMutation = () => {
  return useMutation((id: number) => updateRecommentLike(id));
};

// post
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

// comment

export const useCreatePostCommentMutation = () => {
  const queryClient = useQueryClient();
  const apolloClient = useApolloClient();

  return useMutation(
    (comment: IUsePostCommentMutationProps) => createPostComment(comment),
    {
      onSuccess: () => {
        toast.success("댓글을 작성했어요!");
        queryClient.invalidateQueries([KEY.COMMENT]);
        apolloClient.cache.reset();
      },
    },
  );
};

export const useUpdatePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (comment: IUsePostCommentMutationProps) => updatePostComment(comment),
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
  const apolloClient = useApolloClient();

  return useMutation((id: number) => deletePostComment(id), {
    onSuccess: () => {
      toast.success("댓글이 삭제되었어요.");
      queryClient.invalidateQueries([KEY.COMMENT]);
      apolloClient.cache.reset();
    },
  });
};

// recomment

export const useCreateRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (comment: IUsePostCommentMutationProps) => createRecomment(comment),
    {
      onSuccess: () => {
        toast.success("답글을 작성했어요!");
        queryClient.invalidateQueries([KEY.RECOMMENT]);
        queryClient.invalidateQueries([KEY.COMMENT]);
      },
    },
  );
};

export const useUpdateRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (comment: IUsePostCommentMutationProps) => updateRecomment(comment),
    {
      onSuccess: () => {
        toast.success("답글이 수정되었어요!");
        queryClient.invalidateQueries([KEY.RECOMMENT]);
      },
    },
  );
};

export const useDeleteRecommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteRecomment(id), {
    onSuccess: () => {
      toast.success("답글이 삭제되었어요.");
      queryClient.invalidateQueries([KEY.RECOMMENT]);
    },
  });
};
