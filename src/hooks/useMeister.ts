import httpClient from "@/apis/httpClient";
import Storage from "@/storage";
import { authorization } from "@/apis/token";
import { KEY } from "@/constants";
import { meisterStore } from "@/store/meister.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import { TOKEN } from "@/storage/constants";

const useMeister = () => {
  const [meister, setMeister] = useRecoilState(meisterStore);

  const { data: meisterInfo } = useQuery(
    [KEY.MEISTER_ME],
    async () => {
      const { data } = await httpClient.meister.get(authorization());
      return data;
    },
    { enabled: !!Storage.getItem(TOKEN.ACCESS) },
  );

  React.useEffect(() => {
    if (meisterInfo) setMeister(meisterInfo.meister);
  }, [setMeister, meisterInfo]);

  return { meister };
};

export default useMeister;
