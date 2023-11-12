import throwAxiosError from "@/apis/error/throwAxiosError";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Storage from "@/storage";
import { KEY, ROUTER } from "@/constants";
import { TOKEN } from "@/storage/constants";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const queryClient = useQueryClient();
  const router = useRouter();

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
