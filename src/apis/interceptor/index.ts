import Storage from "@/apis/storage";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import refreshToken from "@/apis/token/refreshToken";
import exception from "@/utils/constants/exception.constants";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
  if (!Storage.getItem("access_token") && Storage.getItem("refresh_token"))
    refreshToken();

  if (requestConfig.headers) {
    requestConfig.headers.Authorization = Storage.getItem("access_token");
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
  if (originalResponse.status !== exception.status.SUCCESS) refreshToken();

  return {
    ...originalResponse,
    data: originalResponse.data,
  };
};
