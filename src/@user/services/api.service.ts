import httpClient from "@/apis/httpClient";
import Storage from "@/storage";

export const logout = async () => {
  const { data } = await httpClient.auth.logout({
    headers: { refresh_token: Storage.getItem("TOKEN:REFRESH") },
  });
  return data;
};
