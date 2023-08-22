import throwAxiosError from "@/apis/error/throwAxiosError";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import Storage from "@/apis/storage";
import { ROUTER, TOKEN } from "@/constants";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const router = useRouter();

  return useMutation(() => login({ authCode }), {
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);

      router.push(ROUTER.HOME);
    },
    onError: (err) => {
      throwAxiosError(err);
    },
  });
};
