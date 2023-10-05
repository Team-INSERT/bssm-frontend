import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "@/apis/interceptor";
import { ERROR, TOKEN } from "@/constants/";
import Storage from "../storage";
import { refresh } from "../token";

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
    HttpClient.clientConfig = {
      headers: {
        Authorization: Storage.getItem(TOKEN.ACCESS) || "",
      },
    };
    this.setting();
  }

  get(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", { ...HttpClient.clientConfig, ...requestConfig });
  }

  getDetail(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/detail", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
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

  admin(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/admin", {
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

  postById(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/:id", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  login(authCode: string, requestConfig?: AxiosRequestConfig) {
    const data = { authCode };
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

  putById(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/:id", data, {
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

  private setting() {
    HttpClient.setCommonInterceptors(this.api);

    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.data.code === ERROR.CODE.TOKEN_403_2) {
          await refresh();
          return this.api(originalRequest);
        }
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
  oauth: new HttpClient("api/auth/oauth/bsm", axiosConfig),
  user: new HttpClient("api/user", axiosConfig),
  timetable: new HttpClient("api/timeTable", axiosConfig),
  post: new HttpClient("api/post/", axiosConfig),
  recomment: new HttpClient("api/recomment", axiosConfig),
  comment: new HttpClient("api/comment", axiosConfig),
  auth: new HttpClient("api/auth/", axiosConfig),
  bamboo: new HttpClient("api/bamboo", axiosConfig),
  admin: new HttpClient("api/bamboo/admin", axiosConfig),
  like: new HttpClient("api/likes/update", axiosConfig),
  image: new HttpClient("api/image/save", axiosConfig),
  meal: new HttpClient("api/meal", axiosConfig),
  calender: new HttpClient("api/calender", axiosConfig),
  reserve: new HttpClient("api/ber", axiosConfig),
  meister: new HttpClient("api/meister", axiosConfig),
  ranking: new HttpClient("api/meister/ranking", axiosConfig),
};
