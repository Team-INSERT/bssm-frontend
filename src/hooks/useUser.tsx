import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import httpClient, { HttpClient } from "@/apis/httpClient/httpClient";
import KEY from "@/constants/key.constant";
import { IUser } from "@/interfaces";
import { emptyUser, userStore } from "@/store/user.store";
import useModal from "@/hooks/useModal";
import Storage from "@/storage";
import { ERROR } from "@/constants";
import { authorization, refresh } from "@/apis/token";
import { isAxiosError } from "axios";
import LoginModal from "@/components/common/Modal/LoginModal";
import { TOKEN } from "@/storage/constants";
import ROLE from "@/constants/role.constant";
import { useDidMountEffect } from "./useDidMountEffect";

const useUser = () => {
  const [user, setUser] = useRecoilState(userStore);
  const { openModal } = useModal();

  const {
    data: userInfo,
    remove,
    error,
    isSuccess,
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
    if (!Storage.getItem(TOKEN.ACCESS)) {
      openModal({ component: <LoginModal /> });
    }
  }, [openModal]);

  React.useEffect(() => {
    if (isAxiosError(error) && error.response) {
      const { code } = error.response.data;

      if (code === ERROR.CODE.TOKEN_403_2) refresh().then(() => refetch());
    }
  }, [error, refetch]);

  React.useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  useDidMountEffect(() => {
    if (isSuccess && !userInfo) {
      return openModal({
        component: <LoginModal />,
      });
    }
  }, [isSuccess]);

  return {
    user,
    isLogined: !!userInfo,
    isAdmin: userInfo?.authority === ROLE.ADMIN,
    logout,
  };
};

export default useUser;
