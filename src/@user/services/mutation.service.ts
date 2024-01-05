import { KEY } from "@/constants";
import Storage from "@/storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "./api.service";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries([KEY.USER]);
      Storage.delItem("TOKEN:ACCESS");
      Storage.delItem("TOKEN:REFRESH");
    },
  });
};
