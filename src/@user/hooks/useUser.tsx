import React from "react";
import { useQuery } from "@tanstack/react-query";
import httpClient from "@/apis/httpClient/httpClient";
import KEY from "@/constants/key.constant";
import Storage from "@/storage";
import { authorization, refresh } from "@/apis/token";
import { isAxiosError } from "axios";
import { TOKEN } from "@/storage/constants";
import { ERROR } from "@/apis/constants";
import LoginModal from "@/@modal/layouts/LoginModal";
import { useDidMountEffect } from "@/hooks";
import { useAtom } from "jotai";
import { useModal } from "@/@modal/hooks";
import { User } from "../types";
import { userContext } from "../context";
import { ROLE } from "../constants";

const useUser = () => {
  const [user, setUser] = useAtom(userContext);
  const { openModal } = useModal();

  const {
    data: userInfo,
    error,
    isSuccess,
    refetch,
  } = useQuery<User>(
    [KEY.USER],
    async () => {
      const { data } = await httpClient.user.get(authorization());
      return data;
    },
    { enabled: !!Storage.getItem(TOKEN.ACCESS) },
  );

  const isSameUser = (id: number) => {
    return userInfo?.id === id;
  };

  React.useEffect(() => {
    if (isAxiosError(error) && error.response) {
      const { code } = error.response.data;
      if (code === ERROR.CODE.TOKEN_403_2) {
        refresh().then(() => refetch());
      }
    }
  }, [error, refetch]);

  React.useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  React.useEffect(() => {
    if (!Storage.getItem(TOKEN.ACCESS)) {
      openModal({ component: <LoginModal /> });
    }
  }, [openModal]);

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
    role: userInfo?.role === "STUDENT" ? "학생" : "선생님",
    isSameUser,
  };
};

export default useUser;
