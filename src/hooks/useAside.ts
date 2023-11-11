import httpClient from "@/apis/httpClient";
import Storage from "@/apis/storage";
import { authorization } from "@/apis/token";
import { KEY, TOKEN } from "@/constants";
import { asideStore } from "@/store/aside.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";

const useAside = () => {
  const [asideInfo, setAsideInfo] = useRecoilState(asideStore);

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

  React.useEffect(() => {
    if (isSuccess) {
      const { ranking, room, meisterResAndAvgAndMax1, isCheckIn } = asideRes;
      const { score, positivePoint, negativePoint } =
        meisterResAndAvgAndMax1.meister;
      setAsideInfo({
        score,
        positivePoint,
        negativePoint,
        ranking,
        room,
        isCheckIn,
      });
    }
  }, [setAsideInfo, asideRes]);

  return { asideInfo, setAsideInfo };
};

export default useAside;
