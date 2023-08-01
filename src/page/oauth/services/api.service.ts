import httpClient from "@/apis/httpClient";

export interface ILoginParams {
  authCode: string | null;
}

export const login = async ({ authCode }: ILoginParams) => {
  if (!authCode) return;

  const { data } = await httpClient.oauth.postOAuth(authCode);
  return data;
};
