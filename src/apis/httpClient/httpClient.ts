import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "@/apis/interceptor";
import Storage from "@/apis/storage";
import refreshToken from "@/apis/token/refreshToken";
import TOKEN from "@/global/constants/token.constant";

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

  postInQuery(
    param: string,
    data: unknown,
    requestConfig?: AxiosRequestConfig,
  ) {
    return this.api.post(`?${param}=${data}`, {
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
    // const queryClient = new QueryClient();

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // queryClient.invalidateQueries("getUser");
        refreshToken();
        return Promise.reject(error);
      },
    );
  }

  static setAccessToken() {
    const accessToken = Storage.getItem(TOKEN.ACCESS);
    HttpClient.clientConfig.headers = {
      ...HttpClient.clientConfig.headers,
      Authorization: accessToken || undefined,
    };
  }

  static removeAccessToken() {
    Storage.setItem(TOKEN.ACCESS, "");
  }

  private static setCommonInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(requestInterceptors as never);
    instance.interceptors.response.use(responseInterceptors);
  }
}

export const axiosConfig: HttpClientConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
};

export default {
  oauth: new HttpClient("api/auth/oauth/bsm", axiosConfig),
  user: new HttpClient("api/user", axiosConfig),
};
