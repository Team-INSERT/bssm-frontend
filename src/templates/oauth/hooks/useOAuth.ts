import { KEY, ROUTER } from "@/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Storage from "@/storage";
import { toast } from "react-toastify";
import { useLoginMutation } from "../services/mutation.service";

const useOAuth = () => {
  const authCode = useSearchParams().get("code");
  const { isSuccess, isError, mutate } = useLoginMutation(authCode);
  const queryClient = useQueryClient();
  const router = useRouter();

  React.useEffect(() => {
    mutate();
    queryClient.invalidateQueries([KEY.USER]);
  }, [queryClient, mutate]);

  React.useEffect(() => {
    if (isSuccess) {
      const redirectUrl = Storage.getItem("SETTING:리다이렉트경로") || "/";
      router.push(redirectUrl);
    }
  }, [isSuccess, router]);

  React.useEffect(() => {
    toast.error("로그인에 실패했어요. 개발자에게 문의해주세요.");
    router.push(ROUTER.HOME);
  }, [isError, router]);
};

export default useOAuth;
