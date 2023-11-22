import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { createReserve, deleteReserve } from "./api.service";
import { BerCreateReserveQuery } from "../types";

export const useCreateReserveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (reserve: BerCreateReserveQuery) => createReserve(reserve),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([KEY.RESERVE]);
        toast.success("베르실 예약에 성공했어요!");
      },
      onError: () => {
        Swal.fire({
          title: "오류 발생",
          text: "예약 가능한 날짜에 예약했는지, 혹은 같은 날에 중복으로 예약하진 않았는지 확인해주세요.",
          icon: "error",
          confirmButtonText: "확인",
        });
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
