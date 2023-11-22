import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { KEY, ROUTER } from "@/constants";
import { createPost, deletePost, updatePost } from "./api.service";
import { PostData } from "../../types";

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation((post: PostData) => updatePost(post), {
    onSuccess: (id) => {
      toast.success("게시글이 수정되었어요!");
      queryClient.invalidateQueries([KEY.POST, id]);
      router.push(`${ROUTER.POST.DETAIL}/${id}`);
    },
  });
};

export const useCreatePostMutation = () => {
  const router = useRouter();
  return useMutation((post: PostData) => createPost(post), {
    onSuccess: (id) => {
      toast.success("게시글이 등록되었어요!");
      router.push(`${ROUTER.POST.DETAIL}/${id}`);
    },
  });
};

export const useDeletePostMutation = () => {
  const router = useRouter();
  return useMutation((id: number) => deletePost(id), {
    onSuccess: () => {
      toast.success("게시글이 삭제되었어요!");
      router.push(`${ROUTER.POST.LIST}`);
    },
  });
};
