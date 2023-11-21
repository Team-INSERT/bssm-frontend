import { useMutation } from "@tanstack/react-query";
import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";
import { login } from "./api.service";

export const useLoginMutation = (authCode: string | null) => {
  return useMutation(() => login(authCode), {
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
    },
  });
};
