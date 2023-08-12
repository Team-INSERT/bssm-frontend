import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import httpClient from "@/apis/httpClient/httpClient";
import KEY from "@/constants/key.constant";
import { IUser } from "@/interfaces";
import { emptyUser, userStore } from "@/store/user.store";
import { getProfileUrl } from "@/helpers";
import useWindow from "@/hooks/useWindow";
import useModal from "@/hooks/useModal";

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
  } = useQuery<IUser>([KEY.USER], async () => {
    const { data } = await httpClient.user.get();
    const profile = getProfileUrl(data.code);
    return {
      ...data,
      profile,
    };
  });

  const logout = () => {
    setUser(emptyUser);
    remove();
  };

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
