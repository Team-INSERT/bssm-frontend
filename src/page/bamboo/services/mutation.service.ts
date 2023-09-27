import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { KEY } from "@/constants";
import useModal from "@/hooks/useModal";
import {
  createBambooPost,
  deleteBambooPost,
  updateBambooPost,
} from "./api.service";

export const useCreateBambooMutation = () => {
  const { closeModal } = useModal();

  return useMutation((content: string) => createBambooPost(content), {
    onSuccess: () => {
      toast.success("글이 제보되었습니다. 관리자 검토 후 글이 게시됩니다.");
      closeModal();
    },
  });
};

export const useAllowBambooMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => updateBambooPost(id), {
    onSuccess: () => {
      toast.success("제보 승인을 완료했습니다!");
      queryClient.invalidateQueries([KEY.BAMBOO_ADMIN]);
      queryClient.invalidateQueries([KEY.BAMBOO]);
    },
  });
};

export const useDeleteBambooMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteBambooPost(id), {
    onSuccess: () => {
      toast.success("삭제가 완료되었습니다!");
      return queryClient.invalidateQueries([KEY.BAMBOO]);
    },
  });
};
