import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import httpClient, { HttpClient } from "@/apis/httpClient/httpClient";
import KEY from "@/constants/key.constant";
import { IUser } from "@/interfaces";
import { emptyUser, userStore } from "@/store/user.store";
import useWindow from "@/hooks/useWindow";
import useModal from "@/hooks/useModal";
import Storage from "@/apis/storage";
import { ERROR, TOKEN } from "@/constants";
import { authorization, refresh } from "@/apis/token";
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
    [KEY.USER, Storage.getItem(TOKEN.ACCESS)],
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
