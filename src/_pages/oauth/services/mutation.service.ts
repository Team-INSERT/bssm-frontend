import throwAxiosError from "@/_apis/error/throwAxiosError";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Storage from "@/_apis/storage";
import { KEY, ROUTER, TOKEN } from "@/_constants";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(() => login({ authCode }), {
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);

      queryClient.invalidateQueries([KEY.USER]);
      router.push(ROUTER.HOME);
    },
    onError: (err) => {
      throwAxiosError(err);
    },
  });
};
