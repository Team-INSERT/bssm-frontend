import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/_constants";
import { ICreateReserve } from "@/_interfaces";
import { toast } from "react-toastify";
import { createReserve, deleteReserve } from "./api.service";

export const useCreateReserveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (reserve: ICreateReserve) => createReserve(reserve),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([KEY.RESERVE]);
        toast.success("베르실 예약에 성공했어요!");
      },
    },
  );
};

export const useDeleteReserveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(async (id: number) => deleteReserve(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([KEY.RESERVE]);
      toast.success("예약을 취소했어요.");
    },
  });
};
