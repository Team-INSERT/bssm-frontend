import { KEY } from "@/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Storage from "@/storage";
import { useLoginMutation } from "../services/mutation.service";

const useOAuth = () => {
  const authCode = useSearchParams().get("code");
  const { isSuccess, mutate } = useLoginMutation(authCode);
  const queryClient = useQueryClient();
  const router = useRouter();

  React.useEffect(() => {
    mutate();
    queryClient.invalidateQueries([KEY.USER]);
  }, []);

  React.useEffect(() => {
    if (isSuccess) {
      const redirectUrl = Storage.getItem("SETTING:리다이렉트경로") || "/";
      router.push(redirectUrl);
    }
  }, [isSuccess, router]);
};

export default useOAuth;
