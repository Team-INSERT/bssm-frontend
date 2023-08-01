import { AxiosRequestConfig, AxiosResponse } from "axios";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
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
  return {
    ...originalResponse,
    data: originalResponse.data,
  };
};
