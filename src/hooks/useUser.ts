import httpClient, { HttpClient } from "@/apis/httpClient/httpClient";
import Storage from "@/apis/storage";
import React from "react";
import KEY from "@/global/constants/key.constant";
import TOKEN from "@/global/constants/token.constant";
import { Student, Teacher } from "@/global/types/user.type";
import { emptyUser, userStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import profileMaker from "@/global/helpers/profileMaker.helper";
import { useRecoilState } from "recoil";
import useWindow from "./useWindow";
import useModal from "./useModal";

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
  } = useQuery<Student | Teacher>(
    [KEY.USER],
    async () => {
      HttpClient.setAccessToken();
      const { data } = await httpClient.user.get();
      const profile = profileMaker(data.code);
      return {
        ...data,
        profile,
      };
    },
    { enabled: !!Storage.getItem(TOKEN.ACCESS) },
  );

  const logout = () => {
    HttpClient.removeAccessToken();
    setUser(emptyUser);
    remove();
  };

  React.useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  React.useEffect(() => {
    if (options?.authorizedPage && !isLoading && !userInfo && !visible) {
      openModal({
        title: "로그인",
        content: "로그인이 필요한 페이지입니다. 메인 페이지로 돌아갑니다.",
        onClose: () => {
          if (isWindow) router.push("/");
        },
      });
    }
  }, [options, userInfo, isLoading, router, visible, openModal, isWindow]);

  return { user, isLogined: !!userInfo, logout };
};

export default useUser;
