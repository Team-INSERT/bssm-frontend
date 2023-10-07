import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import httpClient, { HttpClient } from "@/_apis/httpClient/httpClient";
import KEY from "@/_constants/key.constant";
import { IUser } from "@/_interfaces";
import { emptyUser, userStore } from "@/_store/user.store";
import useWindow from "@/_hooks/useWindow";
import useModal from "@/_hooks/useModal";
import Storage from "@/_apis/storage";
import { ERROR, TOKEN } from "@/_constants";
import { authorization, refresh } from "@/_apis/token";
import { isAxiosError } from "axios";

interface UseUserOptions {
  authorizedPage?: boolean;
}

const useUser = (options?: UseUserOptions) => {
  const [user, setUser] = useRecoilState(userStore);
  const router = useRouter();
  const { openModal, visible } = useModal();
  const { isWindow } = useWindow();

  const {
    data: userInfo,
    remove,
    isLoading,
    error,
    refetch,
  } = useQuery<IUser>(
    [KEY.USER],
    async () => {
      const { data } = await httpClient.user.get(authorization());
      return data;
    },
    { enabled: !!Storage.getItem(TOKEN.ACCESS) },
  );

  const logout = () => {
    HttpClient.removeAccessToken();
    setUser(emptyUser);
    remove();
  };

  React.useEffect(() => {
    if (isAxiosError(error) && error.response) {
      const { code } = error.response.data;

      if (code === ERROR.CODE.TOKEN_403_2) refresh().then(() => refetch());
    }
  }, [error, refetch]);

  React.useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  React.useEffect(() => {
    if (options?.authorizedPage && !isLoading && !userInfo && !visible) {
      // openModal({
      //   component: <LoginModal/>,
      // });
    }
  }, [options, userInfo, isLoading, router, visible, openModal, isWindow]);

  return { user, isLogined: !!userInfo, logout };
};

export default useUser;
