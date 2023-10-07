import { toast } from "react-toastify";
import useModal from "@/_hooks/useModal";
import { KEY } from "@/_constants";
import { ICalender } from "@/_interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCalenderItem, deleteCalenderItem } from "./api.service";

export const useAddCalenderPlanMutation = () => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  return useMutation((calender: ICalender) => createCalenderItem(calender), {
    onSuccess: () => {
      toast.success("일정이 추가되었어요!");
      queryClient.invalidateQueries([KEY.CALENDER]);
      closeModal();
    },
  });
};

export const useDeleteCalenderPlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteCalenderItem(id), {
    onSuccess: () => {
      toast.success("일정이 삭제되었어요!");
      queryClient.invalidateQueries([KEY.CALENDER]);
    },
  });
};
