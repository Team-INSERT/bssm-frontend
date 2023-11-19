import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { KEY, ROUTER } from "@/constants";
import { createPost, updatePost } from "./api.service";
import { PostData } from "../interfaces";

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation((post: PostData) => updatePost(post), {
    onSuccess: (data) => {
      const { id } = data.update;
      toast.success("게시글이 수정되었어요!");
      queryClient.invalidateQueries([KEY.POST, id]);
      router.push(`${ROUTER.POST.DETAIL}/${id}`);
    },
  });
};

export const useCreatePostMutation = () => {
  const router = useRouter();
  return useMutation((post: PostData) => createPost(post), {
    onSuccess: (data) => {
      const { id } = data.create;
      toast.success("게시글이 등록되었어요!");
      router.push(`${ROUTER.POST.DETAIL}/${id}`);
    },
  });
};
