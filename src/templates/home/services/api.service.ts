import httpClient from "@/apis/httpClient";

export const getMain = async () => {
  const { data } = await httpClient.main.get();
  return data;
};
