import throwAxiosError from "@/apis/error/throwAxiosError";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { ROUTER, TOKEN } from "@/constants";
import Cookie from "@/apis/cookie";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const router = useRouter();

  return useMutation(() => login({ authCode }), {
    onSuccess: ({ accessToken, refreshToken }) => {
      Cookie.setItem(TOKEN.ACCESS, accessToken);
      Cookie.setItem(TOKEN.REFRESH, refreshToken);

      router.push(ROUTER.HOME);
    },
    onError: (err) => {
      throwAxiosError(err);
    },
  });
};
