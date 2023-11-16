import { toast } from "react-toastify";
import useModal from "@/hooks/useModal";
import { KEY } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCalendarItem, deleteCalendarItem } from "./api.service";
import { Calendar } from "../interfaces";

export const useAddCalendarPlanMutation = () => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  return useMutation((calendar: Calendar) => createCalendarItem(calendar), {
    onSuccess: () => {
      toast.success("일정이 추가되었어요!");
      queryClient.invalidateQueries([KEY.CALENDER]);
      closeModal();
    },
  });
};

export const useDeleteCalendarPlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteCalendarItem(id), {
    onSuccess: () => {
      toast.success("일정이 삭제되었어요!");
      queryClient.invalidateQueries([KEY.CALENDER]);
    },
  });
};
