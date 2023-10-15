import throwAxiosError from "@/apis/error/throwAxiosError";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Storage from "@/apis/storage";
import { KEY, ROUTER, TOKEN } from "@/constants";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(() => login({ authCode }), {
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);

      queryClient.invalidateQueries([KEY.USER]);
      router.push(Storage.getItem(TOKEN.PATH) ?? ROUTER.HOME);
    },
    onError: (err) => {
      throwAxiosError(err);
    },
  });
};
