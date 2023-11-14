import httpClient from "@/apis/httpClient";

export const login = async (authCode: string | null) => {
  if (authCode) {
    const { data } = await httpClient.oauth.login(authCode);
    return data;
  }
};
