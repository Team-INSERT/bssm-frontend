import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { useModal } from "@/@modal/hooks";
import { createCalendarItem, deleteCalendarItem } from "./api.service";
import { Calendar } from "../types";

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
