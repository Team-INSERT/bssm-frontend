import httpClient from "@/apis/httpClient";
import Storage from "@/storage";
import { KEY } from "@/constants";
import { asideStore } from "@/store/aside.store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import { TOKEN } from "@/storage/constants";
import useWindow from "./useWindow";

const useAside = () => {
  const queryClient = useQueryClient();
  const [asideInfo, setAsideInfo] = useRecoilState(asideStore);
  const { isWindow } = useWindow();

  const { data: asideRes, isSuccess } = useQuery(
    [KEY.ASIDE],
    async () => {
      const { data } = await httpClient.main.getByTitle({
        params: { title: "aside" },
      });
      return data;
    },
    { enabled: !!Storage.getItem(TOKEN.ACCESS) },
  );

  function openCenteredWindow(
    url: string,
    title: string,
    w: number,
    h: number,
  ) {
    const left = (window.innerWidth - w) / 2;
    const top = (window.innerHeight - h) / 2;

    const features = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;
    const newWindow = window.open(url, title, features);

    if (newWindow) {
      newWindow.focus();
      window.addEventListener("focus", () => {
        queryClient.invalidateQueries([KEY.ASIDE]);
      });
    }
  }
  const handlePopupOpenClick = () => {
    if (isWindow)
      openCenteredWindow(
        `https://team-insert.github.io/bssm-checkin/join.html?authorization=${Storage.getItem(
          TOKEN.ACCESS,
        )}`,
        "Centered Window",
        600,
        400,
      );
  };

  React.useEffect(() => {
    if (isSuccess) {
      const { ranking, room, meisterResAndAvgAndMax1, checkInRes } = asideRes;
      const { score, positivePoint, negativePoint } =
        meisterResAndAvgAndMax1.meister;
      setAsideInfo({
        score,
        positivePoint,
        negativePoint,
        ranking,
        room,
        isCheckin: checkInRes,
      });
    }
  }, [setAsideInfo, asideRes]);

  return { asideInfo, setAsideInfo, handlePopupOpenClick };
};

export default useAside;
