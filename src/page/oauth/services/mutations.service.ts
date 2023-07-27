import throwAxiosError from "@/apis/error/throwAxiosError";
import Storage from "@/apis/storage";
import ROUTER from "@/global/constants/router.constant";
import TOKEN from "@/global/constants/token.constant";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { ILoginParams, login } from "./api.service";

export const useLoginMutation = ({ authCode }: ILoginParams) => {
  const router = useRouter();

  return useMutation(() => login({ authCode }), {
    onSuccess: ({ data }) => {
      const { accessToken, refreshToken } = data;

      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      router.push(ROUTER.HOME);
    },
    onError: (err) => {
      throwAxiosError(err);
    },
  });
};
