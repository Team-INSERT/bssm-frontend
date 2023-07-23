import Storage from "@/apis/storage";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import refreshToken from "@/apis/token/refreshToken";
import ERROR from "@/global/constants/error.constant";
import TOKEN from "@/global/constants/token.constant";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
  if (!Storage.getItem(TOKEN.ACCESS) && Storage.getItem(TOKEN.REFRESH))
    refreshToken();

  if (requestConfig.headers) {
    requestConfig.headers.Authorization = Storage.getItem(TOKEN.ACCESS);
  }

  const urlParams = requestConfig.url?.split("/:") || [];
  if (urlParams.length < 2) return requestConfig;

  const paramParsedUrl = urlParams
    ?.map((paramKey) => {
      return requestConfig.params[paramKey];
    })
    .join("/");

  urlParams?.forEach((paramKey: string) => {
    delete requestConfig.params[paramKey];
  }, {});

  return {
    ...requestConfig,
    url: paramParsedUrl,
  };
};

export const responseInterceptors = (originalResponse: AxiosResponse) => {
  if (originalResponse.status !== ERROR.STATUS.SUCCESS) refreshToken();

  return {
    ...originalResponse,
    data: originalResponse.data,
  };
};
