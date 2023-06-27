import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "@/apis/interceptor";
import Storage from "@/apis/storage";
import refreshToken from "@/apis/token/refreshToken";
import { QueryClient } from "react-query";

export interface HttpClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: { Authorization?: string };
}

export class HttpClient {
  private api: AxiosInstance;

  private static clientConfig: HttpClientConfig;

  constructor(url: string, axiosConfig: HttpClientConfig) {
    this.api = axios.create({
      ...axiosConfig,
      baseURL: `${axiosConfig.baseURL}${url}`,
    });
    HttpClient.clientConfig = { headers: { Authorization: "" } };
    this.setting();
  }

  get(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", { ...HttpClient.clientConfig, ...requestConfig });
  }

  getById(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:id", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  getByTitle(url: string, requestConfig?: AxiosRequestConfig) {
    return this.api.get(`/${url}`, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  getInQuery(
    param: string,
    data: string | number,
    requestConfig?: AxiosRequestConfig,
  ) {
    return this.api.get(`?${param}=${data}`, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  post(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  put(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  putByTitle(title: string, data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put(`/${title}`, data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  delete(requestConfig?: AxiosRequestConfig) {
    return this.api.delete("", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  deleteById(id: number, requestConfig?: AxiosRequestConfig) {
    return this.api.delete(`/${id}`, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  private setting() {
    HttpClient.setCommonInterceptors(this.api);
    const queryClient = new QueryClient();

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // const { status, code } = error.response.data
        // if (status === 403 && code === exception.code.TOKEN_403_3) Storage.delItem('refresh_token')
        Storage.delItem("access_token");
        queryClient.invalidateQueries("getUser");
        refreshToken();
        return Promise.reject(error);
      },
    );
  }

  static setAccessToken() {
    const accessToken = Storage.getItem("access_token");
    HttpClient.clientConfig.headers = {
      ...HttpClient.clientConfig.headers,
      Authorization: accessToken || undefined,
    };
  }

  static removeAccessToken() {
    Storage.setItem("access_token", "");
  }

  private static setCommonInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(requestInterceptors as any);
    instance.interceptors.response.use(responseInterceptors);
  }
}

export const axiosConfig: HttpClientConfig = {
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
};
