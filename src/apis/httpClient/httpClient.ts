import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "@/apis/interceptor";
import { KEY } from "@/constants/";
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
      withCredentials: true,
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

  getByTitle(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:title", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  getTimetable(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:grade/:class", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  getPost(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", {
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

  login(code: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post(`bsm?code=${code}`, {
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

  putByTitle(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/:title", data, {
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

  deleteById(requestConfig?: AxiosRequestConfig) {
    return this.api.delete("/:id", {
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
        queryClient.invalidateQueries(KEY.USER);
        return Promise.reject(error);
      },
    );
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
  oauth: new HttpClient("api/auth/oauth", axiosConfig),
  user: new HttpClient("api/user", axiosConfig),
  timetable: new HttpClient("api/timetable", axiosConfig),
  post: new HttpClient("api/post/", axiosConfig),
};
